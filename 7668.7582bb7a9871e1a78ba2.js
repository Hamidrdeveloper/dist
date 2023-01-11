"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7668,5718],{37144:function(e,t,n){var a=n(25773),l=n(11026),i=n(27378),r=n(60042),o=n.n(r),c=n(24391),s=n(41604),d=n(78730),m=n(19511),u=n(56591),g=n(37610),p=n(59183),f=n(78670),b=n(73533),E=n(26204),v=n(93795),h=n(80821),Z=n(91522),y=void 0,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},w=i.forwardRef((function(e,t){var n=i.useContext(b.E_).getPrefixCls,r=(0,c.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),s=(0,l.Z)(r,2),w=s[0],P=s[1],W=function(t,n){var a;P(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},N=function(e){W(!1,e)},C=function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(y,t)},k=function(t){var n;W(!1,t),null===(n=e.onCancel)||void 0===n||n.call(y,t)},S=e.prefixCls,_=e.placement,O=e.children,F=e.overlayClassName,j=x(e,["prefixCls","placement","children","overlayClassName"]),V=n("popover",S),T=n("popconfirm",S),I=o()(T,F),$=i.createElement(p.Z,{componentName:"Popconfirm",defaultLocale:f.Z.Popconfirm},(function(t){return function(t,l){var r=e.okButtonProps,o=e.cancelButtonProps,c=e.title,s=e.cancelText,d=e.okText,m=e.okType,p=e.icon;return i.createElement("div",{className:"".concat(t,"-inner-content")},i.createElement("div",{className:"".concat(t,"-message")},p,i.createElement("div",{className:"".concat(t,"-message-title")},(0,E.Z)(c))),i.createElement("div",{className:"".concat(t,"-buttons")},i.createElement(u.Z,(0,a.Z)({onClick:k,size:"small"},o),s||l.cancelText),i.createElement(Z.Z,{buttonProps:(0,a.Z)((0,a.Z)({size:"small"},(0,g.n)(m)),r),actionFn:C,close:N,prefixCls:n("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},d||l.okText)))}(V,t)})),D=n();return i.createElement(m.Z,(0,a.Z)({},j,{prefixCls:V,placement:_,onVisibleChange:function(t){e.disabled||W(t)},visible:w,overlay:$,overlayClassName:I,ref:t,transitionName:(0,h.m)(D,"zoom-big",e.transitionName)}),(0,v.Tm)(O,{onKeyDown:function(e){var t,n;i.isValidElement(O)&&(null===(n=null==O?void 0:(t=O.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===d.Z.ESC&&w&&W(!1,e)}(e)}}))}));w.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:i.createElement(s.Z,null),disabled:!1},t.Z=w},87668:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(27378),l=n(60071),i=n(96740),r=(n(51161),n(70898)),o=n(65718),c=n(26490),s=n(39338),d=n(26761),m=n(33996),u=(n(95171),n(3288)),g=n(12606),p=n(6110),f=n(35062),b=n(10374),E=n(56552),v=n(38056),h=n(14206),Z=n.n(h),y=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):l(e.value).then(r,o)}c((a=a.apply(e,t||[])).next())}))};var x=({slug:e,name:t,singleData:n})=>{const[l]=u.Z.useForm(),{mutate:i,isLoading:r}=(0,E.useMutation)((({values:t})=>((e,t)=>y(void 0,void 0,void 0,(function*(){try{return(yield Z().put(`settings/${t}`,e)).data}catch(e){throw new Error(e)}})))(t,e)));(0,a.useEffect)((()=>{n&&l.setFieldsValue(n)}),[n]);return a.createElement(u.Z,{form:l,name:"logo-form",layout:"vertical",onFinish:t=>{const{file:n,file_id:a}=t;if(n||a){i({values:{slug:e,data:{file_id:a,file_path:n},subdomain_id:null}},{onSuccess:()=>{p.ZP.success("Updated successfully")}})}else g.Z.error({message:"File field required",description:"File is required, Consider uploading one."})},initialValues:{file_id:null,logo:null}},a.createElement(f.Z,{gutter:[16,0]},a.createElement(b.Z,{span:24},a.createElement(u.Z.Item,{label:t,name:"file"},a.createElement(m.gq,{form:l,type:"dragger",idName:"file_id"})),a.createElement(u.Z.Item,{hidden:!0,name:"file_id"},a.createElement(a.Fragment,null)))),a.createElement(m.Ow,{isPending:r}))},w=n(97851);var P=({singleData:e})=>{const{t:t}=(0,l.$)(),[n]=u.Z.useForm(),{mutate:i,isLoading:r}=(0,E.useMutation)((({values:e})=>(e=>y(void 0,void 0,void 0,(function*(){try{return(yield Z().put("settings/website-title",e)).data}catch(e){throw new Error(e)}})))(e)));(0,a.useEffect)((()=>{e&&n.setFieldsValue(e)}),[e]);return a.createElement(u.Z,{form:n,name:"logo-form",layout:"vertical",onFinish:e=>{const n=Object.assign(Object.assign({},e),{subdomain_id:null,slug:"website-title"});i({values:n},{onSuccess:()=>{p.ZP.success(t("Widget.UpdateTitle"))}})},initialValues:{file_id:null,logo:null}},a.createElement(f.Z,{gutter:[16,0]},a.createElement(b.Z,{span:24},a.createElement(u.Z.Item,{label:t("Widget.WebsiteTitle"),name:["data","title"],rules:[{required:!0}]},a.createElement(w.Z,{placeholder:t("Global.InputPlaceholder",{title:t("Global.Title")})})))),a.createElement(m.Ow,{isPending:r}))};var W=()=>{var e;const[t]=(0,s.KO)(r.S),{t:n}=(0,l.$)(),i=[{path:"",breadcrumbName:n("Widget.Title")}];return a.createElement("div",null,a.createElement(o.default,{routes:i}),a.createElement(N,null,a.createElement(C,null,a.createElement("div",{className:"title"},a.createElement(c.Z.Title,{level:3},n("Widget.Title")))),a.createElement("div",{className:"tabs"},a.createElement(P,{singleData:{data:{title:t.saleSystem.website_title}}})),a.createElement("div",{className:"tabs"},a.createElement(x,{slug:"logo",name:n("Widget.WebsiteLogo"),singleData:{file:t.saleSystem.logo}})),a.createElement("div",{className:"tabs"},a.createElement(x,{slug:"shop-logo",name:n("Widget.ShopLogo"),singleData:{file:null===(e=null==t?void 0:t.saleSystem)||void 0===e?void 0:e["shop-logo"]}})),a.createElement("div",{className:"tabs"},a.createElement(x,{slug:"favicon",name:n("Widget.WebsiteFavicon"),singleData:{file:t.saleSystem.favicon}}))))};const N=d.ZP.div`
  border-radius: 12px;
  background: #fff;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  min-height: 800px;

  & .tabs {
    padding: 16px;

    margin-bottom: 16px;
  }
`,C=d.ZP.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;

  & .title h3 {
    margin: 0;
  }
`;function k({onSubmit:e,isPending:t,initialValues:n}){const[i]=u.Z.useForm(),{t:r}=(0,l.$)();return(0,a.useEffect)((()=>{n&&i.setFieldsValue(n)}),[n]),a.createElement(u.Z,{form:i,layout:"vertical",onFinish:e,name:"theme-form"},a.createElement(f.Z,{gutter:[16,0]},a.createElement(b.Z,{span:8},a.createElement(u.Z.Item,{label:r("Widget.MainColor"),name:["colors","main"],rules:[{required:!0}]},a.createElement(m.zH,null))),a.createElement(b.Z,{span:8},a.createElement(u.Z.Item,{label:r("Widget.PrimaryColor"),name:["colors","primary"],rules:[{required:!0}]},a.createElement(m.zH,null))),a.createElement(b.Z,{span:8},a.createElement(u.Z.Item,{label:r("Widget.SecondaryColor"),name:["colors","secondary"],rules:[{required:!0}]},a.createElement(m.zH,null))),a.createElement(b.Z,{span:8},a.createElement(u.Z.Item,{label:r("Widget.MainAccentColor"),name:["colors","main_accent"],rules:[{required:!0}]},a.createElement(m.zH,null))),a.createElement(b.Z,{span:8},a.createElement(u.Z.Item,{label:r("Widget.MainAccentDarkColor"),name:["colors","main_accent_dark"],rules:[{required:!0}]},a.createElement(m.zH,null))),a.createElement(b.Z,{span:8},a.createElement(u.Z.Item,{label:r("Widget.GreyColor"),name:["colors","grey"],rules:[{required:!0}]},a.createElement(m.zH,null)))),a.createElement(m.Ow,{isPending:t}))}var S=()=>{const[e,t]=(0,a.useState)(),[n,i]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!1),{t:d}=(0,l.$)(),u=[{path:"",breadcrumbName:d("Widget.WebsiteTheme")}];(0,a.useEffect)((()=>{i(!0),y(void 0,void 0,void 0,(function*(){try{return(yield Z().get("settings/theme")).data}catch(e){throw new Error(e)}})).then((e=>{t(e),i(!1)})).catch((()=>i(!1)))}),[]);return a.createElement("div",null,a.createElement(o.default,{routes:u}),a.createElement(_,null,a.createElement(O,null,a.createElement("div",{className:"title"},a.createElement(c.Z.Title,{level:3},d("Widget.WebsiteTheme")))),n?a.createElement(m.aN,{title:d("Widget.GettingWidgetDataLoading")}):a.createElement("div",{className:"tabs"},a.createElement(k,{isPending:r,initialValues:null==e?void 0:e.data,onSubmit:t=>{s(!0),(e=>y(void 0,void 0,void 0,(function*(){try{return(yield Z().put("settings/theme",e)).data}catch(e){throw new Error(e)}})))(Object.assign(Object.assign({},e),{data:Object.assign(Object.assign({},null==e?void 0:e.data),{colors:t.colors})})).then((()=>{s(!1),p.ZP.success(d("Widget.ThemeUpdated"))})).catch((()=>s(!1)))}}))))};const _=d.ZP.div`
  border-radius: 12px;
  background: #fff;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  min-height: 800px;

  & .tabs {
    padding: 16px;
  }
`,O=d.ZP.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;

  & .title h3 {
    margin: 0;
  }
`;var F=n(50836),j=n(96188),V=n(56591),T=n(99386),I=n(41156);function $({onSubmit:e,onRemove:t,isPending:n,initialValues:i}){const[r]=u.Z.useForm(),{t:o}=(0,l.$)();return(0,a.useEffect)((()=>{i&&r.setFieldsValue(Object.assign(Object.assign({},i),{translate:i.translate.length>0?i.translate:[{locale:void 0,title:"",content:""}]}))}),[i]),a.createElement(D,null,a.createElement(u.Z,{form:r,layout:"vertical",name:"settings-form",onFinish:e},a.createElement(f.Z,{gutter:16},a.createElement(b.Z,{span:8,className:"upload-container"},a.createElement(u.Z.Item,{label:o("Widget.Image"),name:"file_path"},a.createElement(m.gq,{form:r,type:"dragger",idName:"file_id"})),a.createElement(u.Z.Item,{hidden:!0,name:"file_id"},a.createElement(a.Fragment,null))),a.createElement(b.Z,{span:16},a.createElement(f.Z,null,a.createElement(b.Z,{span:24},a.createElement(u.Z.Item,{label:o("Widget.Link"),rules:[{required:!0},{type:"url",message:o("Widget.ValidUrl")}],name:["translate",0,"title"]},a.createElement(w.Z,{placeholder:o("Global.InputPlaceholder",{title:"Link"})})))),a.createElement(f.Z,null,a.createElement(b.Z,{span:24},a.createElement(u.Z.Item,{name:["translate",0,"content"],label:o("Global.Description")},a.createElement(m.H4,{height:200})))))),a.createElement(f.Z,{justify:"end",gutter:[16,16]},a.createElement(b.Z,null,a.createElement(V.Z,{style:{minWidth:180},type:"primary",htmlType:"submit",loading:n},o("Global.Submit"))),a.createElement(b.Z,null,a.createElement(I.Z,{onConfirm:t},a.createElement(V.Z,{ghost:!0,danger:!0,type:"primary",icon:a.createElement(T.Z,null)}))))))}const D=d.ZP.div`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px 25px 35px;
  margin-bottom: 40px;
  margin-top: 10px;

  .upload-container {
    & img {
      height: 294px !important;
    }
  }
`;var z=({widget_id:e,data:t})=>{const{t:n}=(0,l.$)(),[i,r]=(0,a.useState)(-2),[o,s]=(0,a.useState)([]);(0,a.useEffect)((()=>{t&&s(t)}),[t]);const d=(t,n)=>{r(t);const a=Object.assign(Object.assign({},n),{widget_id:e,translate:[Object.assign(Object.assign({},n.translate[0]),{locale:"de"})]});-1!==t?((e,t)=>y(void 0,void 0,void 0,(function*(){try{const n=yield Z().put(`widget-files/${e}`,t);return p.ZP.success(v.ZP.t("Global.UpdatedSuccessfully",{title:"Slide"})),n.data}catch(e){throw new Error(e)}})))(t,a).then((()=>{r(-2)})).catch((()=>r(-2))):-1===t&&(e=>y(void 0,void 0,void 0,(function*(){try{const t=yield Z().post("widget-files",e);return p.ZP.success(v.ZP.t("Global.CreatedSuccessfully",{title:"Slide"})),t.data}catch(e){throw new Error(e)}})))(a).then((e=>{r(-2),s((t=>t.map((t=>-1===t.id?e:t))))})).catch((()=>r(-2)))},m=e=>{s((t=>t.filter((t=>t.id!==e)))),-1!==e&&(e=>{y(void 0,void 0,void 0,(function*(){try{return(yield Z().delete(`widget-files/${e}`)).data}catch(e){throw new Error(e)}}))})(e)};return a.createElement(G,null,a.createElement(f.Z,{className:"header",justify:"space-between"},a.createElement(b.Z,null,a.createElement(c.Z.Title,{level:4}," ",n("Widget.FileList"))),a.createElement(b.Z,null,a.createElement(V.Z,{icon:a.createElement(j.Z,null),type:"primary",onClick:()=>{o.some((e=>-1===e.id))||s((e=>[{id:-1,file_path:null,translate:[]},...e]))}},n("Global.Create")))),o.map(((e,t)=>a.createElement($,{initialValues:e,key:`widget-${t}`,isPending:i===e.id,onRemove:()=>m(e.id),onSubmit:t=>d(e.id,t)}))))};const G=d.ZP.div`
  & .header {
    padding: 16px 0;

    & button {
      min-width: 180px;
    }
  }
`;var A=({initialValues:e,onSubmit:t,isPending:n})=>{const[l]=u.Z.useForm();return(0,a.useEffect)((()=>{e&&l.setFieldsValue({translate:e.translate.length>0?e.translate:[{locale:void 0,title:"",content:""}]})}),[e]),a.createElement(u.Z,{form:l,layout:"vertical",name:"settings-form",onFinish:t,initialValues:{translate:[{locale:void 0,title:""}]}},a.createElement(m.jh,{isEditor:!0,inputName:"title",inputDesc:"content"}),a.createElement(m.Ow,{isPending:n}))};var L=({singleData:e})=>{const{mutate:t,isLoading:n}=(0,E.useMutation)((({id:e,values:t})=>e?((e,t)=>y(void 0,void 0,void 0,(function*(){try{const n=yield Z().put(`/widgets/${e}`,t);return p.ZP.success(v.ZP.t("Global.UpdatedSuccessfully",{title:"Widget"})),n.data}catch(e){throw new Error(e)}})))(e,t):(e=>y(void 0,void 0,void 0,(function*(){try{return(yield Z().post("/widgets",e)).data}catch(e){throw new Error(e)}})))(t)));return a.createElement(A,{initialValues:e,isPending:n,onSubmit:n=>{const a=Object.assign(Object.assign({},e),{translate:n.translate});t({id:null==e?void 0:e.id,values:a})}})};const{TabPane:q}=F.Z;var H=({title:e,slug:t})=>{const[n,i]=(0,a.useState)(),[r,s]=(0,a.useState)(!1),{t:d}=(0,l.$)(),u=[{path:"",breadcrumbName:e}];return(0,a.useEffect)((()=>{e&&(s(!0),(e=>y(void 0,void 0,void 0,(function*(){try{return(yield Z().get(`/widgets/${e}`)).data}catch(e){throw new Error(e)}})))(t).then((e=>{i(e),s(!1)})))}),[e]),a.createElement("div",null,a.createElement(o.default,{routes:u}),a.createElement(M,null,a.createElement(U,null,a.createElement("div",{className:"title"},a.createElement(c.Z.Title,{level:3},e))),r?a.createElement(m.aN,{title:d("Widget.GettingWidgetDataLoading")}):a.createElement("div",{className:"tabs"},a.createElement(F.Z,{defaultActiveKey:"1",type:"card",size:"large",style:{marginBottom:32}},a.createElement(q,{tab:d("Widget.Settings"),key:"1"},a.createElement(L,{singleData:n})),a.createElement(q,{tab:d("Widget.Files"),key:"2",disabled:!n},n&&a.createElement(z,{widget_id:n.id,data:n.widgetFiles}))))))};const M=d.ZP.div`
  border-radius: 12px;
  background: #fff;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  min-height: 800px;

  & .tabs {
    padding: 16px;
  }
`,U=d.ZP.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;

  & .title h3 {
    margin: 0;
  }
`;function R(){const{t:e}=(0,l.$)();return a.createElement(i.Z5,null,a.createElement(i.AW,{path:"theme",element:a.createElement(S,null)}),a.createElement(i.AW,{path:"config",element:a.createElement(W,null)}),a.createElement(i.AW,{path:"landing",element:a.createElement(H,{title:e("Widget.Landing"),slug:"landing-main-text"})}),a.createElement(i.AW,{path:"footer",element:a.createElement(H,{title:e("Widget.FooterImages"),slug:"footer-images"})}),a.createElement(i.AW,{path:"slider",element:a.createElement(H,{title:e("Widget.MainPageSlider"),slug:"main-page-slider"})}),a.createElement(i.AW,{path:"category",element:a.createElement(H,{title:e("Widget.CategoryImages"),slug:"categories-information"})}),a.createElement(i.AW,{path:"before-after",element:a.createElement(H,{title:e("Widget.BeforeAndAfter"),slug:"product-description"})}),a.createElement(i.AW,{path:"app-home",element:a.createElement(H,{title:e("Widget.AppHomePage"),slug:"app-home-page-slider"})}))}},41156:function(e,t,n){var a=n(38056),l=n(37144),i=n(27378);t.Z=({children:e,onConfirm:t,isDisabled:n=!1,placement:r="bottom"})=>i.createElement(l.Z,{placement:r,disabled:n,onConfirm:t,okText:a.ZP.t("Global.Yes"),cancelText:a.ZP.t("Global.Cancel"),title:a.ZP.t("Global.DeleteSelectedRows?")},e)},65718:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(50189),l=n(27378),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"}}]},name:"home",theme:"filled"},r=n(92788),o=function(e,t){return l.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};o.displayName="HomeFilled";var c=l.forwardRef(o),s=(n(95171),n(60071)),d=n(31602),m=n(96740);const u=n(26761).ZP.div`
  display: flex;

  .breadcrumb {
    display: flex;
    height: 50px;
    z-index: 1;

    &__inner {
      position: relative;
      z-index: 2;
    }

    & a {
      position: relative;
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 100%;
      padding: 0 30px;
      background: #d1d1d1;
      color: ${({theme:e})=>e.colors.main};

      &:last-child {
        pointer-events: none;
      }

      &:not(:first-child) {
        padding-left: 50px;
      }

      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 52px;
        top: -1px;
        right: -25px;
        bottom: -2px;
        background-color: #d1d1d1;
        transform: scale(0.707) rotate(45deg);
        border-top: 3px solid #eef1f6;
        border-right: 3px solid #eef1f6;
        z-index: 1;
      }

      &:last-child {
        color: #fff;
        position: relative;
        padding-right: 8px;
        background: ${({theme:e})=>e.colors.main};

        &::before {
          content: '';
          position: absolute;
          display: inline-block;
          width: 50px;
          top: 0px;
          right: -25px;
          bottom: 0px;
          background-color: ${({theme:e})=>e.colors.main};
          transform: scale(0.707) rotate(45deg);
          z-index: 1;
        }

        &::after {
          content: none;
        }
      }

      &:first-child {
        color: #666;
        background: #fff;
        border-radius: 8px 0 0 8px;

        &::after {
          background: #fff;
        }
      }
    }
  }
`;var g={MainContainer:u};var p=({module:e,routes:t})=>{const{t:n}=(0,s.$)(),a=(0,m.s0)(),i=t||(null==e?void 0:e.breadcrumbItems);return l.createElement(g.MainContainer,null,l.createElement("div",{className:"breadcrumb"},l.createElement(d.rU,{to:"/admin/dashboard"},l.createElement("span",{className:"breadcrumb__inner"},l.createElement(c,{style:{fontSize:16,marginRight:4}}),l.createElement("span",{className:"breadcrumb__title"},n("Global.Home")))),(i||[]).map(((e,t)=>0===t?l.createElement("a",{onClick:()=>a(-1),key:`breadcrumb-${t}`},l.createElement("span",{className:"breadcrumb__inner"},l.createElement("span",{className:"breadcrumb__title"},e.breadcrumbName))):l.createElement(d.rU,{to:e.path,key:`breadcrumb-${t}`},l.createElement("span",{className:"breadcrumb__inner"},l.createElement("span",{className:"breadcrumb__title"},e.breadcrumbName)))))))}}}]);