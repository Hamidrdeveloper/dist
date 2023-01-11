"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3167],{3167:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(27378),a=n(96740),o=n(92913),i=n(33996),l=n(16333),c=n(35852),d=n(26490),u=n(35062),s=n(10374),m=n(60071),f=n(56552),p=n(6385),g=(n(46320),n(89366)),v=n(97851),h=n(19511),y=n(26761);const{SubMenu:b}=g.Z;function w({items:e,onOptionChange:t,selectedDownloadCategory:n}){const[a,o]=(0,r.useState)(""),[i,l]=(0,r.useState)(!0),{t:c}=(0,m.$)(),d=e=>{let t=e.slug.includes(a);for(const n of e.children)t=t||d(n);return t};return r.createElement(Z,{style:{width:256}},r.createElement(v.Z,{allowClear:!0,onChange:e=>{const t=e.target.value;t.length>0?l(!1):l(!0),o(t)},placeholder:c("DownloadView.TypeToSearch"),suffix:i?r.createElement(p.Z,null):void 0}),r.createElement(g.Z,{mode:"inline",onClick:t},null==e?void 0:e.filter(d).sort(x).map((e=>E({item:e,filterFn:d,onClick:t,customKey:String(e.id),selectedKey:n})))))}function E({item:e,customKey:t,onClick:n,selectedKey:a,filterFn:o}){var i,l;const c=e.id;return 0===(null===(i=null==e?void 0:e.children)||void 0===i?void 0:i.length)?r.createElement(g.Z.Item,{key:c,className:a===String(c)?"selected":""},r.createElement(h.Z,{title:e.name},e.name)):r.createElement(b,{key:`${c}`,onTitleClick:n,className:a===String(c)?"selected":"",title:r.createElement(h.Z,{title:e.name},e.name)},null===(l=null==e?void 0:e.children)||void 0===l?void 0:l.filter(o).sort(x).map((e=>E({onClick:n,filterFn:o,item:e,selectedKey:a,customKey:`${t} - ${e.id}`}))))}function x(e,t){return null===e.sort?1:null===t.sort?-1:e.sort-t.sort}const Z=y.ZP.div`
  width: 256;
  padding: 18px;

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 0 !important;
  }

  & .ant-menu-item-selected {
    background-color: transparent !important;
  }

  .selected > div[role*='menuitem'] {
    color: var(--ant-primary-color);
    background-color: var(--ant-primary-1);
    border-right: 3px solid var(--ant-primary-color);
  }

  .selected.ant-menu-item-only-child {
    color: var(--ant-primary-color);
    border-right: 3px solid var(--ant-primary-color);
    background-color: var(--ant-primary-1) !important;
  }
`;n(68513);var k=n(61985),C=n(38056),$=n(56591);const P=e=>{e.target.src="/assets/icons/other/no-image-icon.png"};var D=({span:e=6,imagePath:t,filePath:n,id:a})=>r.createElement(S,{key:a,span:e,radius:5},r.createElement("div",{className:"content"},r.createElement("img",{height:200,alt:"img alt",width:"100%",onError:P,src:k.Xb.PURE_URL+t,style:{objectFit:"cover"}}),r.createElement($.Z,{block:!0},r.createElement("a",{href:k.Xb.PURE_URL+n,target:"_blank",download:!0},C.ZP.t("Global.Download")))));const S=(0,y.ZP)(s.Z)`
  & .content {
    border: 1px solid #e8e8e8;
    border-radius: ${({radius:e})=>`${e}px`};
    & > img {
      border-radius: ${({radius:e})=>`${e}px ${e}px 0 0`};
    }
    & > button {
      border-radius: ${({radius:e})=>`0 0 ${e}px ${e}px`};
    }
  }
`;var F=({files:e})=>r.createElement(K,{gutter:[16,16]},null==e?void 0:e.map((e=>{var t,n;return D({id:e.id,filePath:null===(t=e.file)||void 0===t?void 0:t.root_file.path,imagePath:null!==(n=e.image_path)&&void 0!==n?n:void 0})})));const K=(0,y.ZP)(u.Z)`
  padding: 20px;
`;var N=n(14206),T=n.n(N),R=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?n(e.value):a(e.value).then(i,l)}c((r=r.apply(e,t||[])).next())}))};function _(){return R(this,void 0,void 0,(function*(){try{return(yield T().get("download-categories/tree")).data.data}catch(e){throw new Error(e)}}))}function A(){const{t:e}=(0,m.$)(),{data:t,isLoading:n}=(0,f.useQuery)("getAllDownloadCategories",_),[a,p]=(0,r.useState)(),{data:g,isLoading:v}=(0,f.useQuery)(`getAllDownloadFiles-Category${a}`,(()=>a?(0,o.f9)(+a):void 0));return r.createElement(c.Z.MainContainer,null,r.createElement(l.Z.Header,null,r.createElement(l.Z.MainContainer,null,r.createElement("div",{className:"title"},r.createElement(d.Z.Title,{level:3},e("DownloadView.Title",{count:2}))))),r.createElement(u.Z,null,r.createElement(s.Z,null,n?r.createElement(i.aN,null):r.createElement(w,{items:t,onOptionChange:({key:e})=>p(e),selectedDownloadCategory:a})),r.createElement(s.Z,{span:18},v?r.createElement(i.aN,null):r.createElement(F,{files:g}))))}function L(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(A,null)}))}},46320:function(e,t,n){n(95171)},68513:function(e,t,n){n(1130),n(98809),n(53422),n(86317),n(46320)},92913:function(e,t,n){n.d(t,{Rf:function(){return c},f9:function(){return d},Zu:function(){return u}});var r=n(38056),a=n(34234),o=n(14206),i=n.n(o),l=(n(68513),function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?n(e.value):a(e.value).then(i,l)}c((r=r.apply(e,t||[])).next())}))});const c=new a.Vx("download-files",r.ZP.t("Download.File.Title"));function d(e){return l(this,void 0,void 0,(function*(){return yield(yield c.getAll({params:{downloadCategoryIds:[e]}})).data}))}function u(e){return l(this,void 0,void 0,(function*(){try{yield i().delete(`download-files/${e}`)}catch(e){throw new Error(e)}}))}},16333:function(e,t,n){var r=n(26761);const a=r.ZP.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;

  & .extra {
    display: flex;
    align-items: center;
  }
`,o=r.ZP.div`
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
`;t.Z={MainContainer:o,Header:a}}}]);