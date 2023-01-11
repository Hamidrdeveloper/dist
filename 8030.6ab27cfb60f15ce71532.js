"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8030],{37144:function(e,t,l){var n=l(25773),a=l(11026),r=l(27378),i=l(60042),c=l.n(i),o=l(24391),s=l(41604),u=l(78730),d=l(19511),m=l(56591),p=l(37610),f=l(59183),v=l(78670),g=l(73533),h=l(26204),E=l(93795),b=l(80821),y=l(91522),Z=void 0,x=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]])}return l},w=r.forwardRef((function(e,t){var l=r.useContext(g.E_).getPrefixCls,i=(0,o.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),s=(0,a.Z)(i,2),w=s[0],k=s[1],C=function(t,l){var n;k(t),null===(n=e.onVisibleChange)||void 0===n||n.call(e,t,l)},N=function(e){C(!1,e)},S=function(t){var l;return null===(l=e.onConfirm)||void 0===l?void 0:l.call(Z,t)},V=function(t){var l;C(!1,t),null===(l=e.onCancel)||void 0===l||l.call(Z,t)},T=e.prefixCls,D=e.placement,B=e.children,O=e.overlayClassName,P=x(e,["prefixCls","placement","children","overlayClassName"]),z=l("popover",T),H=l("popconfirm",T),L=c()(H,O),F=r.createElement(f.Z,{componentName:"Popconfirm",defaultLocale:v.Z.Popconfirm},(function(t){return function(t,a){var i=e.okButtonProps,c=e.cancelButtonProps,o=e.title,s=e.cancelText,u=e.okText,d=e.okType,f=e.icon;return r.createElement("div",{className:"".concat(t,"-inner-content")},r.createElement("div",{className:"".concat(t,"-message")},f,r.createElement("div",{className:"".concat(t,"-message-title")},(0,h.Z)(o))),r.createElement("div",{className:"".concat(t,"-buttons")},r.createElement(m.Z,(0,n.Z)({onClick:V,size:"small"},c),s||a.cancelText),r.createElement(y.Z,{buttonProps:(0,n.Z)((0,n.Z)({size:"small"},(0,p.n)(d)),i),actionFn:S,close:N,prefixCls:l("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},u||a.okText)))}(z,t)})),G=l();return r.createElement(d.Z,(0,n.Z)({},P,{prefixCls:z,placement:D,onVisibleChange:function(t){e.disabled||C(t)},visible:w,overlay:F,overlayClassName:L,ref:t,transitionName:(0,b.m)(G,"zoom-big",e.transitionName)}),(0,E.Tm)(B,{onKeyDown:function(e){var t,l;r.isValidElement(B)&&(null===(l=null==B?void 0:(t=B.props).onKeyDown)||void 0===l||l.call(t,e)),function(e){e.keyCode===u.Z.ESC&&w&&C(!1,e)}(e)}}))}));w.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:r.createElement(s.Z,null),disabled:!1},t.Z=w},16333:function(e,t,l){var n=l(26761);const a=n.ZP.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;

  & .extra {
    display: flex;
    align-items: center;
  }
`,r=n.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;

  & .ant-btn-primary {
    border-radius: 2px;
  }

  div.contents {
    flex: 1;
    padding-left: 40px;
    position: relative;

    & .search-overlay {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      left: 16px;
      background: #fff;

      & .anticon {
        cursor: pointer;
      }

      & input {
        height: 50px;
      }
    }

    & .ant-typography {
      cursor: pointer;

      & .anticon {
        margin-right: 4px;
        color: ${e=>e.theme.colors.main};
      }
    }
  }

  div.group-func {
    padding: 0 44px 0 32px;
    border-left: 2px solid #9d9d9d;

    & button {
      border: none !important;
      background: rgba(74, 81, 97, 0.5);

      &:hover {
        background: rgba(74, 81, 97, 0.5);
      }
    }
  }

  div.title {
    & h3 {
      margin: 0;
    }
  }
`;t.Z={MainContainer:r,Header:a}},78030:function(e,t,l){l.r(t),l.d(t,{default:function(){return z}});var n=l(50189),a=l(27378),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},i=l(92788),c=function(e,t){return a.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:r}))};c.displayName="SwapOutlined";var o=a.forwardRef(c),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"},u=function(e,t){return a.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};u.displayName="DeleteFilled";var d=a.forwardRef(u),m=l(21244),p=l(6385),f=l(97311),v=l(49839),g=l(33996),h=l(28685),E=(l(95171),l(26490)),b=l(72961),y=l(56591),Z=l(97851),x=l(37144),w=l(19511),k=l(68891),C=l(60071),N=l(31602),S=l(96740),V=l(91406),T=l(16333),D=(l(74306),l(89366)),B=l(23425);const O=[{key:"list",title:"List",icon:"/global/list.svg"},{key:"tiles",title:"Tiles",icon:"/global/tiles.svg"},{key:"longTiles",title:"LongTiles",icon:"/global/long-tiles.svg"}];var P=({listView:e,setListView:t})=>{var l;const n=a.createElement(D.Z,null,O.map((l=>a.createElement(D.Z.Item,{key:l.key,onClick:()=>t(l.key),className:l.key===e?"active":""},a.createElement(b.Z,null,a.createElement(g.VZ,{width:15,height:15,src:l.icon}),a.createElement("span",null,l.title))))));return a.createElement(B.Z,{overlay:n,trigger:["click"]},a.createElement(w.Z,{title:"Type of List View"},a.createElement("a",{onClick:e=>e.preventDefault()},a.createElement(g.VZ,{width:16,height:16,color:"#2B7BB2",src:null===(l=O.find((t=>t.key===e)))||void 0===l?void 0:l.icon}))))};function z({module:e,hasSearch:t,onNew:l,onSort:n,onGroup:r,onSearch:i,onFilterButtonClick:c,ExtraAction:s,extraComponent:u,hasDelete:D,hasNew:B=!1,hasFilters:O=!0,newLink:z="upsert",noListView:H=!1,noDescription:L=!1,dontNavigate:F=!1,element:G=null}){const{t:R}=(0,C.$)(),j=(0,S.s0)(),{search:M}=(0,S.TH)(),$=k.parse(M),{listView:I,isDetailVisible:K,selectedRows:_,isFilterVisible:q,setListView:U,setFilterVisible:W,setModalVisible:Y,setDetailVisible:A,setSelectedRows:J,setRequestUpdate:Q,setParams:X,selectedRowsData:ee}=(0,V.usePageLayout)(),[te,le]=(0,a.useState)(!1),[ne,ae]=(0,a.useState)(!1),[re,ie]=(0,a.useState)($.search?String($.search):""),ce=()=>{if(i)i(re),j(`?${k.stringify({search:""!==re?re:void 0},{encode:!1})}`);else{const e={page:1,per_page:10,orderBy:$.orderBy,search:""!==re?re:void 0};F?X((t=>Object.assign(Object.assign({},t),e))):j(`?${k.stringify(e,{encode:!1})}`)}};return a.createElement(a.Fragment,null,a.createElement(T.Z.Header,null,a.createElement(T.Z.MainContainer,null,a.createElement("div",{className:"title"},a.createElement(E.Z.Title,{level:3},null==e?void 0:e.title[1])),a.createElement("div",{className:"contents"},a.createElement(b.Z,{size:40},B&&z&&!l?a.createElement(N.rU,{to:z,"data-cy":"new"},a.createElement(E.Z.Text,{strong:!0},a.createElement(m.Z,null),a.createElement("span",null,R("Global.New")))):B&&a.createElement(y.Z,{"data-cy":"new",type:"text",onClick:()=>l?l():Y(!0)},a.createElement(E.Z.Text,{strong:!0},a.createElement(m.Z,null),a.createElement("span",null,R("Global.New")))),G,n&&a.createElement(y.Z,{type:"text",onClick:n},a.createElement(E.Z.Text,{strong:!0},a.createElement(o,{style:{transform:"rotate(90deg)"}}),a.createElement("span",null,R("Global.Sort")))),t&&a.createElement(y.Z,{"data-cy":"search",type:"text",onClick:()=>{ae(!0)}},a.createElement(E.Z.Text,{strong:!0},a.createElement(p.Z,null),a.createElement("span",null,R("Global.Search")))),ne&&a.createElement("div",{className:"search-overlay"},a.createElement(Z.Z,{"data-cy":"search-input",size:"large",autoFocus:!0,value:re,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),ce())},onChange:e=>{ie(e.target.value)},placeholder:"Search",bordered:!1,suffix:a.createElement(b.Z,{size:"large"},a.createElement(f.Z,{onClick:()=>{if(ie(""),ae(!1),i)i(""),j(`?${k.stringify({search:void 0})}`);else{const e={page:1,per_page:10,search:void 0,orderBy:$.orderBy};F?X((t=>Object.assign(Object.assign({},t),e))):j(`?${k.stringify(e)}`)}}}),a.createElement(p.Z,{onClick:ce}))})),D&&a.createElement(x.Z,{placement:"bottom",okText:R("Global.Yes"),cancelText:R("Global.No"),onConfirm:()=>{e&&(le(!0),(0,h.Wu)({module:e,selectedRowIds:_}).then((()=>{J([]),Q(!0)})).finally((()=>le(!1))))},title:R("Global.DeleteSelectedRows?"),disabled:0===_.length},a.createElement(y.Z,{type:"text"},a.createElement(E.Z.Text,{strong:!0},te?a.createElement(v.Z,null):a.createElement(d,null),a.createElement("span",null,R("Global.Delete"))))))),a.createElement("div",{className:"group-func"},a.createElement(b.Z,null,a.createElement(y.Z,{type:"primary",onClick:()=>null==r?void 0:r(_),disabled:0===_.length||!r},R("Global.GroupFunction")),null==s?void 0:s(_,ee)))),a.createElement("div",{className:"extra"},a.createElement(b.Z,{align:"center",size:"large"},!H&&a.createElement(P,{listView:I,setListView:U}),O&&a.createElement(w.Z,{title:q?"Hide Filter":"Show Filter"},a.createElement("a",{onClick:c||(e=>{e.preventDefault(),X({}),W(!q)})},a.createElement(g.VZ,{width:16,height:16,src:"/global/filter.svg",color:"#2B7BB2"}))),!L&&a.createElement(w.Z,{title:K?"Hide Details":"Show Details"},a.createElement("a",{onClick:e=>{e.preventDefault(),A(!K)}},a.createElement(g.VZ,{width:17,height:17,src:"/global/details.svg",color:"#2B7BB2"})))))),u)}},28685:function(e,t,l){l.d(t,{Wu:function(){return o},Jg:function(){return c},w4:function(){return i}});var n=l(49839),a=(l(33996),l(95171),l(48158)),r=l(27378);function i({id:e,url:t,module:l,checked:i,refetch:c,dataIndex:o,disabled:s=!1}){const[u,d]=(0,r.useState)(!1);return u?r.createElement(n.Z,null):r.createElement(a.Z,{disabled:s,checked:i,onChange:()=>{d(!0),null==l||l.apiService.then(c).finally((()=>d(!1)))}})}function c({id:e,url:t,checked:l,refetch:i,module:c}){const[o,s]=(0,r.useState)(!1);return o?r.createElement(n.Z,null):r.createElement(a.Z,{checked:l,onChange:()=>{s(!0),null==c||c.apiService.updateDefault(e,t).then(i).finally((()=>s(!1)))}})}function o({module:e,selectedRowIds:t,url:l="/bulk-delete"}){return e.apiService.bulkDelete(t,l)}}}]);