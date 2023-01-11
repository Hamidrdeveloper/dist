"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1805],{74477:function(e,t,n){var a=n(21244),l=n(99386),r=n(61985),i=n(86317),o=n(11639),c=n(68600),d=n(33996),s=(n(95171),n(3288)),u=n(35062),m=n(10374),p=n(97851),b=n(48158),f=n(2133),g=n(72961),h=n(56591),E=n(27378),y=n(60071),v=n(26761),Z=(n(21267),function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n});t.Z=({onSubmit:e,initialValues:t,isPending:n})=>{const{t:v}=(0,y.$)(),[w]=s.Z.useForm(),[x,S]=(0,E.useState)([]),{loggedInUserRole:I}=(0,E.useContext)(r.Vo);(0,E.useEffect)((()=>{var e,n;t&&((null!==(n=null===(e=t.translate)||void 0===e?void 0:e.length)&&void 0!==n?n:0)<=0?w.setFieldsValue(Object.assign(Object.assign({},t),{translate:[{locale:void 0,title:"",description:""}]})):w.setFieldsValue(t),S(null==t?void 0:t.paymentMethods))}),[t]);return E.createElement(s.Z,{form:w,layout:"vertical",name:"subdomain-form",onFinish:e,initialValues:{is_active:!0,is_approved:!0,translate:[{locale:void 0,title:"",description:""}]}},E.createElement(E.Suspense,{fallback:E.createElement(d.aN,null)},E.createElement(u.Z,{gutter:8},E.createElement(m.Z,{span:24},E.createElement(u.Z,{justify:"space-between",gutter:16},E.createElement(m.Z,{span:12},E.createElement(s.Z.Item,{label:v("Global.Name"),name:"name",rules:[{required:!0}]},E.createElement(p.Z,{placeholder:v("Global.InputPlaceholder",{title:v("Global.Name")})}))),"partner"!==I&&E.createElement(m.Z,{span:12},E.createElement(s.Z.Item,{label:v("Subdomain.Field.Partner"),name:"partner",rules:[{required:!0}]},E.createElement(o.r,null))),E.createElement(m.Z,{xs:12},E.createElement(s.Z.Item,{label:v("Subdomain.Field.PaymentMethod"),name:"paymentMethods"},E.createElement(c.m,{isMulti:!0,onChange:e=>{window.confirm(v("Subdomain.Field.ChangePaymentMethodNotification"))?(w.setFieldsValue({paymentMethods:e}),S(e)):w.setFieldsValue({paymentMethods:x})}})))),E.createElement(u.Z,null,E.createElement(m.Z,{span:3},E.createElement(s.Z.Item,{label:" ",name:"is_active",valuePropName:"checked"},E.createElement(b.Z,{disabled:"partner"===I},v("Global.IsActive")))),E.createElement(m.Z,{span:3},E.createElement(s.Z.Item,{label:" ",name:"is_approved",valuePropName:"checked"},E.createElement(b.Z,{disabled:"partner"===I},v("Global.IsApproved")))))),E.createElement(f.Z,null),E.createElement(m.Z,{span:24},E.createElement(u.Z,{justify:"space-between",gutter:16},E.createElement(m.Z,{span:24},E.createElement(s.Z.List,{name:"translate"},((e,{add:t,remove:n})=>E.createElement(E.Fragment,null,e.map(((r,o)=>{var c,{key:b,name:f,fieldKey:y}=r,w=Z(r,["key","name","fieldKey"]);return E.createElement(P,{key:b},E.createElement(p.Z.Group,null,E.createElement(u.Z,{style:{width:"100%"},gutter:[0,16]},E.createElement(m.Z,null,E.createElement(s.Z.Item,Object.assign({},w,{name:[f,"locale"],label:v("Global.Language"),fieldKey:[y,"locale"],rules:[{required:!0,message:`Item ${f+1} ${v("Global.Language")} is required`}]}),E.createElement(i.S,{isGroup:!0}))),E.createElement(m.Z,{flex:1},E.createElement(s.Z.Item,Object.assign({},w,{name:[f,"title"],fieldKey:[y,"title"],label:v("Global.Title"),rules:[{required:!0,message:`Item ${f+1} ${v("Global.Title")} is required`}]}),E.createElement(p.Z,{placeholder:v("Global.InputPlaceholder",{title:v("Global.Title")})}))),E.createElement(m.Z,{span:24},E.createElement(s.Z.Item,Object.assign({},w,{name:[f,"description"],label:v("Global.Description"),fieldKey:[y,"description"],rules:[{required:!0,message:`Item ${f+1} ${v("Global.Description")} is required`}]}),E.createElement(d.H4,{placeholder:v("Global.InputPlaceholder",{title:v("Global.Description")})}))))),E.createElement("div",{style:{marginTop:"30px"}},o<1?E.createElement(g.Z,null,E.createElement(h.Z,{ghost:!0,type:"primary",icon:E.createElement(a.Z,null),onClick:()=>t(null,0)}),(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)>1&&E.createElement(h.Z,{ghost:!0,danger:!0,type:"primary",icon:E.createElement(l.Z,null),onClick:()=>n(f)})):E.createElement(h.Z,{ghost:!0,danger:!0,type:"primary",icon:E.createElement(l.Z,null),onClick:()=>n(f)})))}))))))))),E.createElement(d.Ow,{isPending:n})))};const P=v.ZP.div`
  gap: 8px;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & span[role='img'].icon {
    font-size: 16px;
    color: rgb(24, 144, 255);
  }
`},91805:function(e,t,n){n.d(t,{Z:function(){return Q}});n(95171);var a=n(50836),l=n(27378),r=n(60071),i=n(96740),o=n(74477),c=(n(21267),n(26761)),d=n(21244),s=n(99386),u=n(86317),m=n(33996),p=n(3288),b=n(35062),f=n(10374),g=n(97851),h=n(72961),E=n(56591),y=n(2133),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const Z=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,r.$)(),[i]=p.Z.useForm();return(0,l.useEffect)((()=>{n&&i.setFieldsValue({data:n.map((e=>Object.assign(Object.assign({},e),{locale:{locale:e.locale}})))})}),[n]),l.createElement(p.Z,{form:i,layout:"vertical",name:"analyticTagsSetting-form",onFinish:t=>{e(t.data.map((e=>Object.assign(Object.assign({},e),{locale:e.locale.locale}))))},initialValues:{data:[{locale:void 0,google:void 0,"microsoft-uet":void 0}]}},l.createElement(p.Z.List,{name:"data"},((e,{add:t,remove:n})=>l.createElement(l.Fragment,null,e.map((r=>{var{key:i,name:o,fieldKey:c}=r,m=v(r,["key","name","fieldKey"]);return l.createElement(l.Fragment,{key:i},l.createElement(b.Z,{gutter:[16,0],justify:"end",align:"middle"},l.createElement(f.Z,{span:7},l.createElement(p.Z.Item,Object.assign({},m,{required:!0,name:[o,"locale"],label:a("Language.Title"),fieldKey:[c,"locale"]}),l.createElement(u.S,null))),l.createElement(f.Z,{span:7},l.createElement(p.Z.Item,Object.assign({},m,{required:!0,label:a("Global.Google"),name:[o,"google"],fieldKey:[c,"google"]}),l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Global.Google")})}))),l.createElement(f.Z,{span:7},l.createElement(p.Z.Item,Object.assign({},m,{required:!0,label:a("Global.Microsoft"),name:[o,"microsoft-uet"],fieldKey:[c,"microsoft-uet"]}),l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Global.Microsoft")})}))),l.createElement(f.Z,{span:3},l.createElement(h.Z,null,l.createElement(E.Z,{ghost:!0,type:"primary",icon:l.createElement(d.Z,null),onClick:()=>t()}),e.length>1&&l.createElement(E.Z,{ghost:!0,danger:!0,type:"primary",icon:l.createElement(s.Z,null),onClick:()=>n(o)})))),l.createElement(y.Z,null))}))))),l.createElement(m.Ow,{isPending:t}))};var P=n(38056),w=n(34234),x=n(6110),S=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):l(e.value).then(i,o)}c((a=a.apply(e,t||[])).next())}))};const I=new w.Vx("/subdomains",P.ZP.t("Subdomain.Tabs.AnalyticTags"));var _=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):l(e.value).then(i,o)}c((a=a.apply(e,t||[])).next())}))};const k=(e,t,n,a)=>_(void 0,void 0,void 0,(function*(){return yield(e=>S(void 0,void 0,void 0,(function*(){var t;try{const n=yield I.request({url:`subdomains/${null==e?void 0:e.subdomain_id}/save-data`,body:{data:{analytic_tag:null==e?void 0:e.data}},method:"PUT"});return x.ZP.success(P.ZP.t("Global.UpdatedSuccessfully",{title:P.ZP.t("Subdomain.Tabs.AnalyticTags")})),null===(t=null==n?void 0:n._data)||void 0===t?void 0:t.analytic_tag}catch(t){throw new Error(t)}})))({data:e,id:14,partner_id:n,company_id:a,subdomain_id:t,slug:"analytic-tags",template_setting_id:7})}));var O=({partnerId:e,subdomainId:t,companyId:n,analyticTagsData:a})=>{const[r,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)([]);return(0,l.useEffect)((()=>{a&&c(a)}),[]),l.createElement(F,null,l.createElement(Z,{initialValues:o,onSubmit:a=>{G({data:a,states:{setPending:i,setSettings:c},partner_id:e,subdomain_id:t,company_id:n})},isPending:r}))};const G=({data:e,states:{setPending:t,setSettings:n},partner_id:a,subdomain_id:l,company_id:r})=>{t(!0),k(e,l,a,r).then((e=>{t(!1),e&&n(e)})).catch((()=>t(!1)))},F=c.ZP.div`
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
`;var j=n(10777);const T=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,r.$)(),[i]=p.Z.useForm();return(0,l.useEffect)((()=>{n?i.setFieldsValue(Object.assign(Object.assign({},n),{file:n.partner_picture,partner_detail:"Selbständige ClubAdmin Partner-in"})):i.setFieldsValue({partner_detail:"Selbständige ClubAdmin Partner-in"})}),[n]),l.createElement(p.Z,{form:i,layout:"vertical",name:"partnerSettings-form",onFinish:e},l.createElement(b.Z,{gutter:[16,0]},l.createElement(f.Z,{span:12},l.createElement(p.Z.Item,{label:a("ShopSettings.Field.Partner"),name:"partner",rules:[{required:!0}]},l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("ShopSettings.Field.Partner")})}))),l.createElement(f.Z,{span:12},l.createElement(p.Z.Item,{name:"partner_detail",rules:[{required:!0}],label:a("ShopSettings.Field.PartnerDetail")},l.createElement(g.Z,{disabled:!0,placeholder:a("Global.InputPlaceholder",{title:a("ShopSettings.Field.PartnerDetail")})}))),l.createElement(f.Z,{span:12},l.createElement(p.Z.Item,{name:"partner_picture",rules:[{required:!0}],label:a("ShopSettings.Field.PartnerPicture")},l.createElement(g.Z,{disabled:!0,placeholder:a("Global.InputPlaceholder",{title:a("ShopSettings.Field.PartnerPicture")})}))),l.createElement(f.Z,{span:12},l.createElement(p.Z.Item,{label:a("Global.UploadFile"),name:"file"},l.createElement(m.gq,{form:i,valueName:"partner_picture"})),l.createElement(p.Z.Item,{hidden:!0,name:"file_id"})),l.createElement(f.Z,{span:12},l.createElement(p.Z.Item,{label:a("ShopSettings.Field.PhoneNumber"),name:"phone",rules:[{required:!0}]},l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("ShopSettings.Field.PhoneNumber")})}))),l.createElement(f.Z,{span:12},l.createElement(p.Z.Item,{label:a("ShopSettings.Field.Email"),name:"email",rules:[{required:!0,type:"email",message:`${a("User.PersonalInfo.EmailWrong")}`}]},l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("ShopSettings.Field.Email")})}))),l.createElement(f.Z,{span:24},l.createElement(p.Z.Item,{label:a("Subdomain.FirstPageText"),name:"first_page_text"},l.createElement(j.default,{style:{minHeight:140},placeholder:a("Global.InputPlaceholder",{title:a("Subdomain.FirstPageText")})})))),l.createElement(m.Ow,{isPending:t}))};var V=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):l(e.value).then(i,o)}c((a=a.apply(e,t||[])).next())}))};const q=new w.Vx("/subdomains",P.ZP.t("Subdomain.Tabs.Partner"));var K=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):l(e.value).then(i,o)}c((a=a.apply(e,t||[])).next())}))};const M=(e,t,n,a)=>K(void 0,void 0,void 0,(function*(){return yield(e=>V(void 0,void 0,void 0,(function*(){var t;try{const n=yield q.request({url:`subdomains/${null==e?void 0:e.subdomain_id}/save-data`,body:{data:{partner:null==e?void 0:e.data}},method:"PUT"});return x.ZP.success(P.ZP.t("Global.UpdatedSuccessfully",{title:P.ZP.t("Subdomain.Tabs.Partner")})),null===(t=null==n?void 0:n._data)||void 0===t?void 0:t.partner}catch(t){throw new Error(t)}})))({data:e,id:12,partner_id:n,company_id:a,subdomain_id:t,slug:"partner",template_setting_id:10})}));var $=({partnerId:e,subdomainId:t,companyId:n,partnerData:a})=>{const[r,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)();return(0,l.useEffect)((()=>{c(a)}),[]),l.createElement(U,null,l.createElement(T,{initialValues:o,onSubmit:a=>C({data:a,states:{setPending:i,setSettings:c},partner_id:e,subdomain_id:t,company_id:n}),isPending:r}))};const C=({data:e,states:{setPending:t,setSettings:n},partner_id:a,subdomain_id:l,company_id:r})=>{t(!0),M(e,l,a,r).then((e=>{t(!1),e&&n(e)})).catch((()=>t(!1)))},U=c.ZP.div`
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
`;var N=n(9172),D=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const A=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,r.$)(),[i]=p.Z.useForm(),o=[{label:"FacebookIcon",value:"/assets/images/footer/facebook.png"},{label:"InstagramIcon",value:"/assets/images/footer/insta.png"},{label:"YoutubeIcon",value:"/assets/images/footer/tube.png"}];return(0,l.useEffect)((()=>{n&&i.setFieldsValue({data:[...n]})}),[n]),l.createElement(p.Z,{form:i,layout:"vertical",name:"socialMediaSetting-form",onFinish:t=>e(t.data),initialValues:{data:[{name:void 0,url:void 0,icon_url:void 0}]}},l.createElement(p.Z.Item,null,l.createElement(p.Z.List,{name:"data"},((e,{add:t,remove:n})=>l.createElement(l.Fragment,null,e.map(((r,i)=>{var{key:c,name:u,fieldKey:m}=r,v=D(r,["key","name","fieldKey"]);return l.createElement(l.Fragment,{key:c},l.createElement(b.Z,{gutter:[16,0],justify:"end",align:"middle"},l.createElement(f.Z,{span:7},l.createElement(p.Z.Item,Object.assign({},v,{label:a("Global.Name"),name:[u,"name"],fieldKey:[m,"name"]}),l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Global.Name")})}))),l.createElement(f.Z,{span:7},l.createElement(p.Z.Item,Object.assign({},v,{label:a("Global.Url"),name:[u,"url"],fieldKey:[m,"url"]}),l.createElement(g.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Global.Url")})}))),l.createElement(f.Z,{span:7},l.createElement(p.Z.Item,Object.assign({},v,{label:a("Global.IconUrl"),name:[u,"icon_url"],fieldKey:[m,"icon_url"]}),l.createElement(N.Z,{options:o}))),l.createElement(f.Z,{span:3},l.createElement(h.Z,null,0===i&&l.createElement(E.Z,{ghost:!0,type:"primary",icon:l.createElement(d.Z,null),onClick:()=>t()}),e.length>1&&l.createElement(E.Z,{ghost:!0,danger:!0,type:"primary",icon:l.createElement(s.Z,null),onClick:()=>n(u)})))),l.createElement(y.Z,null))})))))),l.createElement(m.Ow,{isPending:t}))};var L=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):l(e.value).then(i,o)}c((a=a.apply(e,t||[])).next())}))};const z=new w.Vx("/subdomains",P.ZP.t("Subdomain.Tabs.SocialMedia"));var Y=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?n(e.value):l(e.value).then(i,o)}c((a=a.apply(e,t||[])).next())}))};const H=(e,t,n,a)=>Y(void 0,void 0,void 0,(function*(){return yield(e=>L(void 0,void 0,void 0,(function*(){var t;try{const n=yield z.request({url:`subdomains/${null==e?void 0:e.subdomain_id}/save-data`,body:{data:{social_media:null==e?void 0:e.data}},method:"PUT"});return x.ZP.success(P.ZP.t("Global.UpdatedSuccessfully",{title:P.ZP.t("Subdomain.Tabs.SocialMedia")})),null===(t=null==n?void 0:n._data)||void 0===t?void 0:t.social_media}catch(t){throw new Error(t)}})))({data:e,id:15,partner_id:n,subdomain_id:t,company_id:a,slug:"social-media",template_setting_id:16})}));var R=({partnerId:e,subdomainId:t,companyId:n,socialMediaData:a})=>{const[r,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)([]);return(0,l.useEffect)((()=>{c(a)}),[]),l.createElement(B,null,l.createElement(A,{initialValues:o,onSubmit:a=>W({data:a,states:{setPending:i,setSettings:c},partner_id:e,subdomain_id:t,company_id:n}),isPending:r}))};const W=({data:e,states:{setPending:t,setSettings:n},partner_id:a,subdomain_id:l,company_id:r})=>{t(!0),H(e,l,a,r).then((e=>{t(!1),e&&n(e)})).catch((()=>t(!1)))},B=c.ZP.div`
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
`,{TabPane:J}=a.Z;var Q=({formProps:e,subdomainId:t,partnerId:n})=>{var c,d,s,u,m,p,b,f,g;const{company_id:h}=(0,i.UO)(),E=h?Number(h):void 0,{t:y}=(0,r.$)();return l.createElement(a.Z,{defaultActiveKey:"subdomain"},l.createElement(J,{children:l.createElement(o.Z,Object.assign({},e)),tab:l.createElement("span",null,y("Subdomain.Tabs.Subdomain")),key:"subdomain"}),l.createElement(J,{children:l.createElement(O,{partnerId:n,subdomainId:t,companyId:E,analyticTagsData:null!==(s=null===(d=null===(c=null==e?void 0:e.initialValues)||void 0===c?void 0:c._data)||void 0===d?void 0:d.analytic_tag)&&void 0!==s?s:[{locale:null,google:"","microsoft-uet":""}]}),tab:l.createElement("span",null,y("Subdomain.Tabs.AnalyticTag")),key:"analytic"}),l.createElement(J,{children:l.createElement(R,{socialMediaData:null!==(p=null===(m=null===(u=null==e?void 0:e.initialValues)||void 0===u?void 0:u._data)||void 0===m?void 0:m.social_media)&&void 0!==p?p:[{name:"",url:"",icon_url:""}],partnerId:n,subdomainId:t,companyId:E}),tab:l.createElement("span",null,y("Subdomain.Tabs.SocialMedia")),key:"social-media"}),l.createElement(J,{children:l.createElement($,{partnerData:null!==(g=null===(f=null===(b=null==e?void 0:e.initialValues)||void 0===b?void 0:b._data)||void 0===f?void 0:f.partner)&&void 0!==g?g:void 0,partnerId:n,subdomainId:t,companyId:E}),tab:l.createElement("span",null,y("Subdomain.Tabs.Partner")),key:"partner"}))}}}]);