"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7412],{63993:function(e,t,a){var n=a(7914),r=a(11873);t.Z=void 0;var l=n(a(2398)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(27378)),s=n(a(82821));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var o=function(e){return i.createElement(s.default,(0,l.default)({},e,{component:"div"}))};t.Z=o},39254:function(e,t,a){a(23903);var n=a(96297),r=a(33996),l=a(27378);t.Z=({walletId:e,userId:t})=>{const a=new n.Z;return l.createElement(r.Xg,{module:a},l.createElement(r.Xg.Panel,null,l.createElement(r.s_.Header,{hasSearch:!0,hasNew:!1,noDescription:!0}),l.createElement(r.s_.ListView,{dontNavigate:!0,module:a,hasUpdate:!1,params:{walletId:e,holderId:t}})))}},97412:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(27378),r=a(96740),l=a(61985),i=(a(30414),a(41280)),s=a(33996),c=a(26490),o=a(10374),d=a(35062),m=a(56591),u=a(63993),f=a(60071),h=a(56552),p=a(26761);var g=({strokeWidth:e=2})=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"62",height:"62",viewBox:"0 0 62 62"},n.createElement("g",{id:"Spend",transform:"translate(-1547 -219)"},n.createElement("g",{id:"Ellipse_424","data-name":"Ellipse 424",transform:"translate(1547 219)",fill:"#fff",stroke:"#ef476f",strokeWidth:e},n.createElement("circle",{cx:"31",cy:"31",r:"31",stroke:"none"}),n.createElement("circle",{cx:"31",cy:"31",r:"29.5",fill:"none"})),n.createElement("g",{id:"Icon_feather-arrow-down-left","data-name":"Icon feather-arrow-down-left",transform:"translate(1568.08 241.32)"},n.createElement("path",{id:"Path_7524","data-name":"Path 7524",d:"M10.5,10.5,29.1,29.1",transform:"translate(-10.5 -10.5)",fill:"none",stroke:"#ef476f",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e}),n.createElement("path",{id:"Path_7525","data-name":"Path 7525",d:"M10.5,29.1H29.1V10.5",transform:"translate(-10.5 -10.5)",fill:"none",stroke:"#ef476f",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e}))));var E=({strokeWidth:e=2})=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"62",height:"62",viewBox:"0 0 62 62"},n.createElement("g",{id:"Income",transform:"translate(-1148 -219)"},n.createElement("g",{id:"Ellipse_422","data-name":"Ellipse 422",transform:"translate(1148 219)",fill:"#fff",stroke:"#06d6a0",strokeWidth:e},n.createElement("circle",{cx:"31",cy:"31",r:"31",stroke:"none"}),n.createElement("circle",{cx:"31",cy:"31",r:"29.5",fill:"none"})),n.createElement("g",{id:"Icon_feather-arrow-down-left","data-name":"Icon feather-arrow-down-left",transform:"translate(1169.08 241.32)"},n.createElement("path",{id:"Path_7524","data-name":"Path 7524",d:"M10.5,29.1,29.1,10.5",transform:"translate(-10.5 -10.5)",fill:"none",stroke:"#06d6a0",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e}),n.createElement("path",{id:"Path_7525","data-name":"Path 7525",d:"M10.5,10.5H29.1V29.1",transform:"translate(-10.5 -10.5)",fill:"none",stroke:"#06d6a0",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e})))),w=a(14206),y=a.n(w),b=function(e,t,a,n){function r(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function s(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){e.done?a(e.value):r(e.value).then(i,s)}c((n=n.apply(e,t||[])).next())}))};function v({userId:e}){return b(this,void 0,void 0,(function*(){try{return(yield y().get(`users/${e}/wallet`)).data.data}catch(e){throw new Error(e)}}))}var k=a(39254);const{Title:x}=c.Z;var Z=()=>{const e=new i.Z,{user_id:t}=(0,r.UO)(),{data:a}=(0,h.useQuery)(["wallet-userId",t],v.bind(null,{userId:t})),{t:l}=(0,f.$)(),c=[{path:"",breadcrumbName:"Dashboard"},{path:"/wallet",breadcrumbName:"Wallet"}];return n.createElement(s.Xg,{module:e},n.createElement(s.Xg.Breadcrumb,{routes:c}),n.createElement(T,{gutter:[32,32]},n.createElement(o.Z,{xs:24,lg:12,className:"container current-balance-container"},n.createElement(x,{level:4,className:"text"},l("Wallet.CleafinStars")),n.createElement(x,{level:1,className:"digit"},null==a?void 0:a.balance)),n.createElement(o.Z,{xs:24,lg:12,className:"container no-padding"},n.createElement(d.Z,{justify:"space-between",gutter:[0,I]},n.createElement(o.Z,{xs:11,className:"small-container income-container"},n.createElement("div",{className:"icon"},n.createElement(E,{strokeWidth:2.5})),n.createElement("div",{className:"title"},n.createElement(x,{level:5},l("Wallets.Income"))),n.createElement("div",{className:"digits"},n.createElement(x,{level:3},null==a?void 0:a.deposit))),n.createElement(o.Z,{xs:11,className:"small-container expense-container"},n.createElement("div",{className:"icon"},n.createElement(g,{strokeWidth:2.5})),n.createElement("div",{className:"title"},n.createElement(x,{level:5},l("Wallets.Spend"))),n.createElement("div",{className:"digits"},n.createElement(x,{level:3},null==a?void 0:a.withdraw))),n.createElement(o.Z,{xs:24,className:"small-container deposit-container disabled"},n.createElement(u.Z,null,"You can request a deposit and after confirming the system, the money will be credited to your account."),n.createElement(m.Z,{type:"primary",disabled:!0},"Submit a Request")))),n.createElement(o.Z,{xs:24},n.createElement(x,{level:3,className:"text"},l("Wallet.TransactionHistory")),n.createElement(k.Z,{userId:t}))))};const P="30vh",W=parseInt(P)/2+"vh",N="#FFFFFF",I=8,T=(0,p.ZP)(d.Z)`
  padding: 20px;

  .deposit-container {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & button {
      border-radius: 3px;
      min-width: fit-content;
    }
  }

  .income-container,
  .expense-container {
    display: grid;
    column-gap: 20px;
    align-items: center;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 10px 1fr 10px 2fr 10px;

    .icon {
      grid-area: 2 / 1 / 5 / 2;

      justify-self: end;
      font-size: 3.5rem;
    }
    .title {
      grid-area: 2 / 2 /3 / 3;
    }
    .digits {
      grid-area: 4 / 2 / 5 /3;
    }
  }

  & .ant-col {
    padding: 12px;
    border-radius: 8px;
  }

  .no-padding {
    padding: 0;
  }

  .container {
    height: ${P};
  }

  .small-container {
    min-width: 49%;
    background-color: ${N};
    height: ${W};
  }

  .current-balance-container {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 5vh 1fr 5vh;
    grid-template-columns: 1fr 1fr 1fr;

    height: calc(${P} + ${I+"px"});

    background-color: ${l.wR.colors.secondary};

    .text {
      justify-self: left;
      color: ${N};
      grid-area: 1 / 1 / 2 / 1;
    }
    .digit {
      margin-top: 0;
      margin-bottom: 0;
      letter-spacing: 3px;
      color: ${N};
      grid-area: 2 / 2 / 2 / 2;
    }
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
    & .ant-typography {
      color: #b0b0b0;
    }
  }
`;function _(){return n.createElement(r.Z5,null,n.createElement(r.AW,{path:"",element:n.createElement(Z,null)}),n.createElement(r.AW,{path:"/:user_id",element:n.createElement(Z,null)}))}},96297:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(38056),r=(a(95171),a(34234)),l=a(46322);a(23903);class i{constructor(){this.entity="/wallet-transactions",this.title=[n.ZP.t("Wallets.Transaction.Title"),n.ZP.t("Wallets.Transaction.Title",{count:2})],this.apiService=new r.Vx(this.entity,this.title[0]),this.breadcrumbItems=[],this.detailColumns=[],this.tableColumns=[{key:"type",dataIndex:"type",className:"hasTile",title:n.ZP.t("Global.Type")},{key:"user",dataIndex:["wallet","user"],render:l.Pb,title:n.ZP.t("Wallets.FullName")},{key:"amount",dataIndex:"amount",className:"hasTile number",title:n.ZP.t("Global.Amount")},{key:"date",dataIndex:"date",className:"hasTile",render:l.JK,title:n.ZP.t("Global.Date")},{key:"type",dataIndex:"type",className:"hasTile",title:n.ZP.t("Global.Type")}]}}},41280:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(38056),r=(a(95171),a(34234)),l=(a(27378),a(46322)),i=(a(30414),JSON.parse('{"AW":"/asasdasd/wallet/*"}'));class s{constructor(){this.entity="/wallets",this.title=[n.ZP.t("Wallets.Title"),n.ZP.t("Wallets.Title",{count:2})],this.apiService=new r.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${i.AW.replace("*","")}`}],this.detailColumns=[],this.tableColumns=[{key:"user-id",dataIndex:["user","id"],title:n.ZP.t("Global.ID"),render:(e,t)=>(0,l.XD)(e,t.id)},{key:"uuid",dataIndex:"uuid",className:"hasTile",title:n.ZP.t("Wallets.UUID")},{key:"balance",dataIndex:"balance",className:"hasTile number",title:n.ZP.t("Wallets.Balance")},{key:"user",dataIndex:"user",className:"hasTile",render:l.Pb,title:n.ZP.t("Wallets.FullName")},{key:"created_at",className:"hasTile",render:l.JK,dataIndex:"created_at",title:n.ZP.t("Wallets.CreatedAt")}]}}},23903:function(e,t,a){a(30414)}}]);