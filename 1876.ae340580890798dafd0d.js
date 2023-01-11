"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1876],{92555:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(50189),l=a(27378),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"},i=a(92788),c=function(e,t){return l.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:r}))};c.displayName="LinkOutlined";var o=l.forwardRef(c)},58836:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(64649),l=a(25773),r=a(27378),i=a(60042),c=a.n(i),o=a(42445),s=a(73533),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},u=function(e){var t=e.prefixCls,a=e.className,i=e.hoverable,o=void 0===i||i,u=d(e,["prefixCls","className","hoverable"]);return r.createElement(s.C,null,(function(e){var i=(0,e.getPrefixCls)("card",t),s=c()("".concat(i,"-grid"),a,(0,n.Z)({},"".concat(i,"-grid-hoverable"),o));return r.createElement("div",(0,l.Z)({},u,{className:s}))}))},m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},p=function(e){return r.createElement(s.C,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,i=e.className,o=e.avatar,s=e.title,d=e.description,u=m(e,["prefixCls","className","avatar","title","description"]),p=a("card",n),f=c()("".concat(p,"-meta"),i),g=o?r.createElement("div",{className:"".concat(p,"-meta-avatar")},o):null,v=s?r.createElement("div",{className:"".concat(p,"-meta-title")},s):null,b=d?r.createElement("div",{className:"".concat(p,"-meta-description")},d):null,y=v||b?r.createElement("div",{className:"".concat(p,"-meta-detail")},v,b):null;return r.createElement("div",(0,l.Z)({},u,{className:f}),g,y)}))},f=a(50836),g=a(35062),v=a(10374),b=a(31552),y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a};var h=function(e){var t,a,i,d=r.useContext(s.E_),m=d.getPrefixCls,p=d.direction,h=r.useContext(b.Z),E=e.prefixCls,x=e.className,Z=e.extra,w=e.headStyle,k=void 0===w?{}:w,S=e.bodyStyle,O=void 0===S?{}:S,C=e.title,N=e.loading,j=e.bordered,P=void 0===j||j,I=e.size,T=e.type,R=e.cover,A=e.actions,L=e.tabList,$=e.children,D=e.activeTabKey,M=e.defaultActiveTabKey,_=e.tabBarExtraContent,U=e.hoverable,V=e.tabProps,F=void 0===V?{}:V,B=y(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=m("card",E),z=0===O.padding||"0px"===O.padding?{padding:24}:void 0,K=r.createElement("div",{className:"".concat(G,"-loading-block")}),q=r.createElement("div",{className:"".concat(G,"-loading-content"),style:z},r.createElement(g.Z,{gutter:8},r.createElement(v.Z,{span:22},K)),r.createElement(g.Z,{gutter:8},r.createElement(v.Z,{span:8},K),r.createElement(v.Z,{span:15},K)),r.createElement(g.Z,{gutter:8},r.createElement(v.Z,{span:6},K),r.createElement(v.Z,{span:18},K)),r.createElement(g.Z,{gutter:8},r.createElement(v.Z,{span:13},K),r.createElement(v.Z,{span:9},K)),r.createElement(g.Z,{gutter:8},r.createElement(v.Z,{span:4},K),r.createElement(v.Z,{span:3},K),r.createElement(v.Z,{span:16},K))),H=void 0!==D,Y=(0,l.Z)((0,l.Z)({},F),(t={},(0,n.Z)(t,H?"activeKey":"defaultActiveKey",H?D:M),(0,n.Z)(t,"tabBarExtraContent",_),t)),J=L&&L.length?r.createElement(f.Z,(0,l.Z)({size:"large"},Y,{className:"".concat(G,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),L.map((function(e){return r.createElement(f.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(C||Z||J)&&(i=r.createElement("div",{className:"".concat(G,"-head"),style:k},r.createElement("div",{className:"".concat(G,"-head-wrapper")},C&&r.createElement("div",{className:"".concat(G,"-head-title")},C),Z&&r.createElement("div",{className:"".concat(G,"-extra")},Z)),J));var X=R?r.createElement("div",{className:"".concat(G,"-cover")},R):null,W=r.createElement("div",{className:"".concat(G,"-body"),style:O},N?q:$),Q=A&&A.length?r.createElement("ul",{className:"".concat(G,"-actions")},function(e){var t=e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}));return t}(A)):null,ee=(0,o.Z)(B,["onTabChange"]),te=I||h,ae=c()(G,(a={},(0,n.Z)(a,"".concat(G,"-loading"),N),(0,n.Z)(a,"".concat(G,"-bordered"),P),(0,n.Z)(a,"".concat(G,"-hoverable"),U),(0,n.Z)(a,"".concat(G,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(t=!0)})),t}()),(0,n.Z)(a,"".concat(G,"-contain-tabs"),L&&L.length),(0,n.Z)(a,"".concat(G,"-").concat(te),te),(0,n.Z)(a,"".concat(G,"-type-").concat(T),!!T),(0,n.Z)(a,"".concat(G,"-rtl"),"rtl"===p),a),x);return r.createElement("div",(0,l.Z)({},ee,{className:ae}),i,X,W,Q)};h.Grid=u,h.Meta=p;var E=h},18624:function(e,t){},35593:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(34234),l=(a(95171),a(14206)),r=a.n(l),i=a(27378),c=a(60071),o=a(36836),s=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function i(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){e.done?a(e.value):l(e.value).then(i,c)}o((n=n.apply(e,t||[])).next())}))};function d({url:e,value:t,title:a,query:l,isMulti:d,onChange:u,pending:m=!1,isClearable:p=!0,menuPlacement:f="bottom",maxItemsToShow:g}){let v;const{t:b}=(0,c.$)(),[y]=(0,i.useState)("search"),h=function(e,t){if(!e)return;if("string"==typeof e)return e;const a=t.split(".");return h(e[a[0]],a.slice(1).join("."))};return i.createElement(o.n9,{cacheOptions:!0,value:t,isMulti:d,defaultOptions:!1,onChange:e=>{null==u||u(e)},additional:{page:1},isClearable:p,loadOptions:(t,a,{page:i})=>s(this,void 0,void 0,(function*(){void 0!==v&&v.cancel("Operation canceled due to new request."),v=r().CancelToken.source();const a=l?Object.assign(Object.assign({},l),{page:i}):{page:i};return new n.Vx(e).getAll({cancelToken:v.token,params:t?Object.assign({[y]:t},a):a}).then((e=>({options:e.data,hasMore:e.data.length>=10,additional:{page:t?2:i+1}})))})),menuPlacement:f,classNamePrefix:"react-select",menuPortalTarget:document.body,getOptionLabel:e=>{const t=["name","title","label","number","person.full_name","user.person.full_name","username","user.username","type-value"];let a;for(const n of t)if(a=h(e,n),a)break;if(!a&&t.map((e=>e.includes("-")))){const n=t.filter((e=>e.includes("-")));n.forEach((t=>{a=t.split("-").map((t=>e[t])).join(" - ")}))}return null!=a?a:"NO LABEL"},getOptionValue:e=>e.id,isLoading:!!m||void 0,theme:e=>(0,n.$p)(e),placeholder:b("Global.SelectPlaceholder",{title:a}),styles:{menuPortal:e=>Object.assign(Object.assign({},e),{zIndex:9999})},maxMenuHeight:g?33*g:void 0})}},61309:function(e,t,a){var n=a(38056),l=a(22042),r=(a(95171),a(31675)),i=a(3288),c=a(35062),o=a(10374),s=a(97851),d=a(25724),u=a(28681),m=a(56591),p=a(68891),f=a(27378),g=a(96740),v=a(62500),b=a(26761),y=(a(95914),a(35593));t.Z=({filters:e,dontNavigate:t,defSelectedFilters:a,defSelectedValues:b,onSubmit:E,onReset:x})=>{const Z=(0,g.s0)(),{search:w,pathname:k}=(0,g.TH)(),[S]=i.Z.useForm(),[O,C]=(0,f.useState)(a||[]);(0,f.useEffect)((()=>{b&&S.setFieldsValue(b||{})}),[b]);const N=()=>{const{query:e}=p.parseUrl(k+w),t={page:e.page?Number(e.page):1,per_page:e.per_page?Number(e.per_page):10,search:e.search?String(e.search):void 0};Z(t)},j=()=>{const e=S.getFieldValue("filter-select");S.resetFields(),S.setFieldsValue({"filter-select":e}),x()},P=(0,f.useCallback)((e=>"id"===e.key?"ID":(0,r.hi)((0,r.fl)(String(null==e?void 0:e.key)))),[]);return f.createElement(h,null,f.createElement(i.Z,{form:S,layout:"vertical",name:"filter-form",onFinish:n=>{var l,r,i;const c=e.filter((e=>e.isSelect));for(const{key:e,type:t}of c)"array"===t&&Array.isArray(n[e])?n[e]=n[e].map((e=>null==e?void 0:e.id)):n[e]=null===(l=n[e])||void 0===l?void 0:l.id;const o=e.filter((e=>"date"===e.type));for(const{key:e}of o)n[e]=null===(r=n[e])||void 0===r?void 0:r.format("YYYY-MM-DD");const s=e.filter((e=>"bool"===e.type||"boolean"===e.type));for(const{key:e}of s)n[e]=null===(i=n[e])||void 0===i?void 0:i.value;t||N(),void 0!==a?E(n,O):E(n)}},f.createElement(c.Z,{justify:"center"},f.createElement(o.Z,{span:24},f.createElement("div",{className:"filter-select"},f.createElement(i.Z.Item,{name:"filter-select"},f.createElement(v.ZP,{isMulti:!0,isClearable:!0,options:e,maxMenuHeight:300,minMenuHeight:300,value:O,classNamePrefix:"react-select",onChange:(e,t)=>{if("clear"===t.action&&C([]),0===e.length)return j();C(e)},getOptionLabel:P,placeholder:n.ZP.t("Global.SelectFilters"),getOptionValue:e=>(0,r.hi)(String(null==e?void 0:e.key))})))),O.map(((e,t)=>f.createElement(o.Z,{xs:24,key:`field-${t}`},"string"===e.type&&!e.isSelect&&f.createElement(i.Z.Item,{label:(0,r.fl)(e.key),name:e.key},f.createElement(s.Z,null)),"int"===e.type&&!e.isSelect&&f.createElement(i.Z.Item,{label:(0,r.fl)(e.key),name:e.key},f.createElement(d.Z,null)),"float"===e.type&&f.createElement(i.Z.Item,{label:(0,r.fl)(e.key),name:e.key},f.createElement(d.Z,null)),e.isSelect&&e.selectUrl&&f.createElement(i.Z.Item,{label:(0,r.hi)((0,r.fl)(e.key)),name:e.key},f.createElement(y.Z,{url:e.selectUrl,isMulti:"array"===e.type,title:(0,r.hi)((0,r.fl)(e.key))})),("bool"===e.type||"boolean"===e.type)&&f.createElement(i.Z.Item,{name:e.key,label:(0,r.fl)(e.key)},f.createElement(v.ZP,{isClearable:!0,options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]})),"date"===e.type&&f.createElement(i.Z.Item,{name:e.key,label:(0,r.fl)(e.key)},f.createElement(u.Z,{format:(0,r._A)()})))))),f.createElement(l.Z,{onClick:e=>{e.preventDefault(),e.stopPropagation(),S.submit()},isPending:!1,justify:"center",disabledPrimary:0===O.length}),f.createElement(m.Z,{danger:!0,type:"link",disabled:!O.length,onClick:j},f.createElement("u",null,"Reset"))))};const h=b.ZP.div`
  padding: 16px;
  height: 100%;
  overflow: auto;

  & .filter-select {
    margin-bottom: 24px;
  }

  & .ant-form.ant-form-vertical {
    display: flex;
    flex-direction: column;
  }

  & .form-submit .ant-form-item {
    width: 100%;

    & button {
      width: 100%;
    }
  }
`},44207:function(e,t,a){var n=a(26761);const l=n.ZP.div`
  transition: all 0.3s ease-in-out;
  overflow: auto;
  width: ${e=>e.collapsed?"calc(100% - 300px)":"100%"};
`,r=n.ZP.div`
  min-height: 600px;
  background: #f6f9fb;
  border-bottom-left-radius: 12px;
  transition: all 0.3s ease-in-out;
  min-width: ${e=>e.collapsed?"300px":"0"};
  max-width: ${e=>e.collapsed?"300px":"0px"};
  overflow: ${e=>e.collapsed?"initial":"hidden"};

  & .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    & h4 {
      margin: 0;
      white-space: nowrap;
    }
  }
`,i=n.ZP.div`
  display: flex;
`;t.Z={ListContainer:l,FilterContainer:r,FilterArea:i}},81876:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var n=a(97311),l=a(34234),r=a(26490),i=a(56591),c=a(68891),o=a(27378),s=a(60071),d=a(31602),u=a(96740),m=a(81703),p=a(92555),f=(a(95171),a(52395)),g=a(50836),v=a(35062),b=a(10374),y=a(91406),h=a(26761);const E=h.ZP.div`
  top: 81px;
  right: 0;
  bottom: 0;
  width: 320px;
  z-index: 100;
  overflow-y: auto;
  min-height: 740px;
  position: absolute;
  background: #f6f9fb;
  border-bottom-right-radius: 12px;
  transform: ${e=>e.isOpen?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1), box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
`,x=h.ZP.div`
  & .ant-tabs-nav-list {
    width: 100%;

    & .ant-tabs-tab {
      flex: 1;
      justify-content: center;
    }
  }
`,Z=h.ZP.div`
  padding: 16px 24px;

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;

    & .amount {
      color: ${e=>e.theme.colors.main};
    }
  }

  div.content {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;var w={DetailContainer:E,MainContainer:x,Details:Z};function k({data:e,columns:t,isPending:a}){const{t:n}=(0,s.$)(),{isDetailVisible:l}=(0,y.usePageLayout)(),i=(e,t)=>"function"!=typeof t?"boolean"==typeof e?o.createElement(r.Z.Text,{strong:!0},e?"Yes":"No"):o.createElement(r.Z.Text,{strong:!0},null!=e?e:"-"):o.createElement(t,{data:e});return o.createElement(w.DetailContainer,{isOpen:l},o.createElement(w.MainContainer,null,o.createElement(f.Z,{tip:"Loading ...",spinning:a},o.createElement(g.Z,{defaultActiveKey:"1"},o.createElement(g.Z.TabPane,{key:"1",tab:o.createElement("span",null,o.createElement(m.Z,null)," ",n("Global.Details"))},o.createElement(w.Details,null,o.createElement("div",{className:"header"},o.createElement(r.Z.Text,{strong:!0},n("Global.Details")),o.createElement(r.Z.Text,{strong:!0,className:"amount"},n("Global.Amount"))),(t||[]).map(((t,a)=>o.createElement(v.Z,{key:`detail-${a}`,className:"content",justify:"end"},o.createElement(b.Z,{flex:1},o.createElement(r.Z.Text,null,t.label)),o.createElement(b.Z,{flex:1,style:{textAlign:"end"}},Array.isArray(t.key)?i(((e,t)=>{if(!t)return"";let a=-1;return e.forEach((e=>{Array.isArray(a)&&(a=Object.assign({},a)),a=-1===a?t[e]:a?a[e]:"-"})),a})(t.key,e),t.render):i(null==e?void 0:e[t.key],t.render))))))),o.createElement(g.Z.TabPane,{disabled:!0,tab:o.createElement("span",null,o.createElement(p.Z,null)," ",n("Global.Attachments")),key:"2"},n("Global.AttachmentTabs"))))))}var S=a(21329),O=a(53988);var C=function({children:e,module:t}){const{t:a}=(0,s.$)(),{singleData:n,isModalVisible:l,setSingleData:r,setModalVisible:i}=(0,y.usePageLayout)(),c=()=>{r(void 0),i(!1)},d=a`${t.title[0]}.Title`,u=a(n?"Global.UpdateTitle":"Global.CreateTitle",{title:d});return o.createElement(S.Z,{width:1300,footer:!1,destroyOnClose:!0,closable:!1,onCancel:c,visible:l,title:o.createElement(O.Z,{onClose:c,items:[...t.breadcrumbItems||[],{path:"",breadcrumbName:u}]})},o.createElement(o.Suspense,{fallback:o.createElement("p",null,"Loading Upsert Module ...")},o.Children.toArray(e).map((e=>o.cloneElement(e,{singleData:n})))))},N=a(61309),j=a(44207),P=(a(95914),a(61985)),I=a(58836);a(18624);const T=h.ZP.div`
  padding: 24px 64px;
  max-height: 525px;
  overflow-y: auto;

  & .ant-card {
    &.active {
      & .ant-card-body {
        background: ${e=>e.theme.colors.primary};
      }
    }
    &.greenActive {
      & .ant-card-body {
        background: #e8f5e9;
      }
    }

    & .mainImage {
      width: 100%;
      height: 20vw;
      display: flex;
      text-align: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    & .ant-card-body {
      padding: 16px 24px !important;
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-height: 256px;

      & .single {
        display: flex;
        justify-content: space-between;

        & .ant-typography {
          font-weight: 500;
        }

        & .number {
          color: #2b7bb2;
          text-align: right;
        }

        & .id {
          cursor: pointer;
          color: #1890ff;
        }
      }
    }
  }
`;var R={MainContainer:T};function A({noId:e,loading:t,columns:n,dataSource:l,noSelection:i,selectedRows:c,onClickRow:s,setSelectedRows:d}){const{setSelectedRowsData:u,selectedRowsData:m}=(0,y.usePageLayout)(),p=(e,t)=>{i||"INPUT"!==e.target.tagName&&"id"!==e.target.id&&(null==s||s(t),(null==c?void 0:c.some((e=>e===t.id)))?(null==d||d(c.filter((e=>e!==t.id))),null==u||u(m.filter((e=>e!==t)))):(null==d||d([...c||[],t.id]),null==u||u([...m||[],t])))},f=(e,t)=>{let a=-1;return Array.isArray(e)?(e.forEach((e=>{a=-1===a?t[e]:a?a[e]:"-"})),a):"string"==typeof e||"number"==typeof e?t[e]:void 0};return o.createElement(R.MainContainer,null,t?o.createElement(v.Z,{gutter:[16,16]},Array.from(new Array(9)).map(((e,t)=>o.createElement(b.Z,{span:8,key:`data-${t}`},o.createElement(I.Z,{loading:!0}))))):o.createElement(v.Z,{gutter:[16,16]},(l||[]).map(((t,l)=>o.createElement(b.Z,{span:8,key:`data-${l}`},o.createElement(I.Z,{onClick:e=>p(e,t),className:(null==c?void 0:c.some((e=>e===t.id)))?"active":""},(e?(n||[]).slice(1):n||[]).map(((e,n)=>{var l,i;return(null===(l=null==e?void 0:e.className)||void 0===l?void 0:l.includes("hasTile"))?(null===(i=null==e?void 0:e.className)||void 0===i?void 0:i.includes("mainImage"))?o.createElement("div",{className:"mainImage",key:`column-${n}`},o.createElement("img",{src:e.dataIndex?P.Xb.PURE_URL+f(e.dataIndex,t):"",onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=a(8683)},alt:"Main Image Not Available"})):o.createElement("div",{className:"single",key:`column-${n}`},o.createElement(r.Z.Text,null,e.title),o.createElement("div",{className:e.className},e.render?e.render(e.key?t[e.key]:"-",t,n):o.createElement(r.Z.Text,null,e.dataIndex?f(e.dataIndex,t):"-"))):null}))))))))}var L=o.memo((function(e){return o.createElement(A,Object.assign({},e))}),((e,t)=>e.loading===t.loading&&e.dataSource===t.dataSource&&e.selectedRows===t.selectedRows&&e.onClickRow===t.onClickRow)),$=a(11450);function D({pagination:e,isPending:t,onChange:a,dontNavigate:n=!1}){const l=(0,u.s0)(),{search:r,pathname:i}=(0,u.TH)(),[s,d]=(0,o.useState)();(0,o.useEffect)((()=>{e&&d(e)}),[e]);return o.createElement(v.Z,{justify:"center",style:{padding:"32px 0"}},o.createElement($.Z,{showSizeChanger:!0,showQuickJumper:!0,disabled:t,onChange:(e,t)=>{if(n)a&&a(e,t);else{const{query:a}=c.parseUrl(i+r),n={orderBy:a.orderBy,search:a.search?String(a.search):void 0,page:Number(a.page)===e?Number(a.page):e,per_page:Number(a.per_page)===t?Number(a.per_page):t};l(`?${c.stringify(n,{encode:!1})}`)}},total:null==s?void 0:s.total,current:null==s?void 0:s.current_page,pageSize:(null==s?void 0:s.per_page)||10}))}var M=a(28685),_=a(55398);const U=h.ZP.div`
  padding: 24px 64px;
  max-height: 525px;
  overflow-y: auto;

  & .ant-card {
    &.active {
      & .ant-card-body {
        background: ${e=>e.theme.colors.primary};
      }
    }
    &.greenActive {
      & .ant-card-body {
        background: #e8f5e9;
      }
    }

    & .ant-card-body {
      padding: 16px 24px !important;
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-height: 256px;

      & .single {
        display: flex;
        justify-content: space-between;

        .flexGrow {
          flex-grow: 1;
        }

        & .ant-typography {
          font-weight: 500;
        }

        & .number {
          color: #2b7bb2;
          text-align: right;
        }

        & .id {
          cursor: pointer;
          color: #1890ff;
        }
      }
    }
  }
`;var V={MainContainer:U};function F({noId:e,loading:t,columns:a,dataSource:n,selectedRows:l,onClickRow:i,noSelection:c,setSelectedRows:s,greenSelectCondition:d=(()=>!1)}){var u;const{setSelectedRowsData:m,selectedRowsData:p}=(0,y.usePageLayout)();return o.createElement(V.MainContainer,null,t?o.createElement(v.Z,{gutter:[16,16]},Array.from(new Array(9)).map(((e,t)=>o.createElement(b.Z,{span:8,key:`data-${t}`},o.createElement(I.Z,{loading:!0}))))):o.createElement(v.Z,{gutter:[16,16]},null===(u=n||[])||void 0===u?void 0:u.map(((t,n)=>o.createElement(b.Z,{span:8,key:`data-${n}`},o.createElement(I.Z,{onClick:e=>((e,t)=>{c||"INPUT"!==e.target.tagName&&"id"!==e.target.id&&(null==i||i(t),(null==l?void 0:l.some((e=>e===t.id)))?(null==s||s(l.filter((e=>e!==t.id))),null==m||m(p.filter((e=>e!==t)))):(null==s||s([...l||[],t.id]),null==m||m([...p||[],t])))})(e,t),className:((null==l?void 0:l.some((e=>e===t.id)))?"active":"")+" "+(d(t.id)?"greenActive":"")},(e?(a||[]).slice(1):a||[]).map(((e,a)=>{var n;return(null===(n=null==e?void 0:e.className)||void 0===n?void 0:n.includes("hasTile"))?o.createElement("div",{className:"single",key:`column-${a}`},o.createElement(r.Z.Text,null,e.title),o.createElement("div",{className:e.className},e.render?e.render(e.key?t[e.key]:"-",t,a):o.createElement(r.Z.Text,null,e.dataIndex?((e,t)=>{let a=-1;return Array.isArray(e)?(e.forEach((e=>{a=-1===a?t[e]:a?a[e]:"-"})),a):"string"==typeof e||"number"==typeof e?t[e]:""})(e.dataIndex,t):"-"))):null}))))))))}var B=o.memo((function(e){return o.createElement(F,Object.assign({},e))}),((e,t)=>e.loading===t.loading&&e.dataSource===t.dataSource&&e.selectedRows===t.selectedRows&&e.onClickRow===t.onClickRow)),G=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a};function z({module:e,onUpdate:t,onUpdateWithModel:a,hasActive:m,hasDefault:p,tableLayout:f,tableScroll:g,noSelection:v=!1,params:b={},noId:h=!1,togglers:E=[],hasUpdate:x=!0,dontNavigate:Z=!1,updateLink:w="upsert",customEntities:S,greenSelectCondition:O=(()=>!1)}){var P;const{t:I}=(0,s.$)(),{search:T}=(0,u.TH)(),R=(0,u.s0)(),{UpsertComponent:A}=e,$=c.parse(T),[U,V]=(0,o.useState)(),{listView:F,isFilterVisible:z,selectedRows:K,requestUpdate:q,isDetailVisible:H,setSingleData:Y,setSelectedRows:J,setFilterVisible:X,setModalVisible:W,setRequestUpdate:Q,setSelectedRowsData:ee,setParams:te,params:ae}=(0,y.usePageLayout)(),[ne,le]=(0,o.useState)(),[re,ie]=(0,o.useState)(!1),{data:ce,isLoading:oe,refetch:se}=(0,l.i7)({service:null!==(P=null==S?void 0:S.getAll)&&void 0!==P?P:e.apiService,params:Object.assign(Object.assign({},b),ae),orderBy:Z?U:void 0}),[de,ue]=(0,o.useState)([]);(0,o.useEffect)((()=>{q&&(se(),Q(!1))}),[q]),(0,o.useEffect)((()=>{if(te(Object.assign(b,ae)),$&&$.orderBy){const t=JSON.parse($.orderBy),a=Object.keys(t)[0];ue([...pe,...E.map((t=>Object.assign(t,{width:150,className:"hasTile",key:t.dataIndex,render:(a,n)=>o.createElement(M.w4,Object.assign({},{module:e,checked:a,refetch:se,id:n.id,url:t.url,disabled:(null==t?void 0:t.disabled)?!n[null==t?void 0:t.disabled]:void 0,dataIndex:t.dataIndex}))})))].map((e=>e.dataIndex!==a?e:Object.assign(Object.assign({},e),{sorter:!0,defaultSortOrder:"ASC"===t[a]?"ascend":"descend"}))))}else ue([...pe,...E.map((t=>Object.assign(t,{width:150,className:"hasTile",key:t.dataIndex,render:(a,n)=>o.createElement(M.w4,Object.assign({},{module:e,checked:a,refetch:se,id:n.id,url:t.url,disabled:(null==t?void 0:t.disabled)?!n[null==t?void 0:t.disabled]:void 0,dataIndex:t.dataIndex}))})))])}),[$.orderBy]);const me=(0,o.useMemo)((()=>{var e;if(!(null===(e=null==ce?void 0:ce.meta)||void 0===e?void 0:e.filters))return[];const t=[];return Object.keys(ce.meta.filters).forEach((e=>{var a;const n=ce.meta.filters[e];"ids"!==e&&t.push({key:e,type:n,isSelect:!!ce.meta.filterLinks[e],selectUrl:null!==(a=ce.meta.filterLinks[e])&&void 0!==a?a:void 0})})),t.sort(((e,t)=>{switch(e.type){case"string":return-1;case"float":return"string"===t.type?1:-1;case"int":if(!e.isSelect||!t.isSelect)return"string"===t.type||"float"===t.type?1:-1;if(e.isSelect&&!t.isSelect)return 1;if(!e.isSelect&&t.isSelect)return-1;if(e.isSelect&&t.isSelect)return 0;case"boolean":return"string"===t.type||"int"===t.type||"float"===t.type?1:-1;default:return 0}})),t}),[null==ce?void 0:ce.meta.filters]);(0,o.useEffect)((()=>{ce&&((null==$?void 0:$.orderBy)||ue((e=>e.map((e=>{var t;return(null===(t=ce.meta.orderByColumns)||void 0===t?void 0:t.includes(e.dataIndex))?Object.assign(Object.assign({},e),{sorter:!0}):e})))))}),[ce]);const pe=[{width:80,key:"id",title:"ID",sorter:!0,fixed:"left",dataIndex:"id",className:"id hasTile hasLongTile",render:(e,n)=>x?w?o.createElement("span",{onClick:()=>{R(`${w}/${e}`,{state:{data:n}})}},e):o.createElement(d.rU,{to:{pathname:`${w}/${e}`,state:{id:e}}},e):o.createElement("span",{onClick:()=>{null==t||t(e,n),null==a||a(n)}},e)},...e.tableColumns,m?{width:150,sorter:!0,key:"is_active",dataIndex:"is_active",className:"hasTile",title:I("Global.IsActive"),render:(t,a)=>o.createElement(M.w4,{id:a.id,module:e,checked:t,refetch:se,dataIndex:"is_active",url:e.entity.match("product-variations|calendar-categories")?"active":"is-active"})}:{},p?{width:150,key:"is_default",dataIndex:"is_default",className:"hasTile",title:I("Global.IsDefault"),render:(t,a)=>o.createElement(M.Jg,{id:a.id,url:"default",module:e,refetch:se,checked:t})}:{}],fe=t=>{if(!H)return null;t.id!==(null==ne?void 0:ne.id)&&(ie(!0),e.apiService.getOne(t.id,null==S?void 0:S.getOne).then((e=>{e&&le(e)})).finally((()=>ie(!1))))},ge=()=>{te({})};return o.createElement(o.Fragment,null,o.createElement(k,{data:ne,isPending:re,columns:null==e?void 0:e.detailColumns}),o.createElement(j.Z.FilterArea,{collapsed:z},o.createElement(j.Z.FilterContainer,{collapsed:z},o.createElement("div",{className:"header"},o.createElement(r.Z.Title,{level:4},"Filter"),o.createElement(i.Z,{type:"text",shape:"circle",icon:o.createElement(n.Z,null),onClick:()=>{ge(),X(!1)}})),o.createElement(N.Z,{filters:me,dontNavigate:Z,onSubmit:e=>{te(Object.assign(Object.assign({},b),{filters:e}))},onReset:ge})),o.createElement(j.Z.ListContainer,{collapsed:z},"list"===F&&de.length>0&&o.createElement(_.Z,{noSelection:v,hasNavigate:Z?e=>{V(e)}:void 0,loading:oe,dataSource:null==ce?void 0:ce.data,tableLayout:f,tableScroll:g,onClickRow:fe,selectedRows:K,setSelectedRows:(e,t)=>{t.length>0&&ee(t),J(e)},columns:(h?de.slice(1).filter((e=>{var t;return!(null===(t=e.className)||void 0===t?void 0:t.includes("noListView"))})):de.filter((e=>{var t;return!(null===(t=e.className)||void 0===t?void 0:t.includes("noListView"))}))).map(((e,t,a)=>{var{width:n}=e,l=G(e,["width"]);return t===a.length-1?Object.assign({},l):Object.assign({width:n},l)}))}),"longTiles"===F&&de.length>0&&o.createElement(L,{noId:h,loading:oe,noSelection:v,columns:de.slice().sort((e=>{var t;return(null===(t=e.className)||void 0===t?void 0:t.includes("mainImage"))?-1:0})),dataSource:null==ce?void 0:ce.data,onClickRow:fe,selectedRows:K,setSelectedRows:J}),"tiles"===F&&de.length>0&&o.createElement(B,{noId:h,noSelection:v,greenSelectCondition:O,loading:oe,columns:de,dataSource:null==ce?void 0:ce.data,onClickRow:fe,selectedRows:K,setSelectedRows:J}))),o.createElement(D,{isPending:oe,pagination:null==ce?void 0:ce.meta,dontNavigate:Z,onChange:(e,t)=>{te((a=>Object.assign(Object.assign({},a),{page:e,per_page:t}))),se()}}),o.createElement(C,{module:e},A&&o.createElement(A,{module:e,onCallback:()=>{W(!1),Y(void 0),se()}})))}},28685:function(e,t,a){a.d(t,{Wu:function(){return o},Jg:function(){return c},w4:function(){return i}});var n=a(49839),l=(a(33996),a(95171),a(48158)),r=a(27378);function i({id:e,url:t,module:a,checked:i,refetch:c,dataIndex:o,disabled:s=!1}){const[d,u]=(0,r.useState)(!1);return d?r.createElement(n.Z,null):r.createElement(l.Z,{disabled:s,checked:i,onChange:()=>{u(!0),null==a||a.apiService.then(c).finally((()=>u(!1)))}})}function c({id:e,url:t,checked:a,refetch:i,module:c}){const[o,s]=(0,r.useState)(!1);return o?r.createElement(n.Z,null):r.createElement(l.Z,{checked:a,onChange:()=>{s(!0),null==c||c.apiService.updateDefault(e,t).then(i).finally((()=>s(!1)))}})}function o({module:e,selectedRowIds:t,url:a="/bulk-delete"}){return e.apiService.bulkDelete(t,a)}}}]);