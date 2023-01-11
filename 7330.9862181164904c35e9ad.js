"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7330],{96297:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(38056),n=(a(95171),a(34234)),s=a(46322);a(23903);class i{constructor(){this.entity="/wallet-transactions",this.title=[l.ZP.t("Wallets.Transaction.Title"),l.ZP.t("Wallets.Transaction.Title",{count:2})],this.apiService=new n.Vx(this.entity,this.title[0]),this.breadcrumbItems=[],this.detailColumns=[],this.tableColumns=[{key:"type",dataIndex:"type",className:"hasTile",title:l.ZP.t("Global.Type")},{key:"user",dataIndex:["wallet","user"],render:s.Pb,title:l.ZP.t("Wallets.FullName")},{key:"amount",dataIndex:"amount",className:"hasTile number",title:l.ZP.t("Global.Amount")},{key:"date",dataIndex:"date",className:"hasTile",render:s.JK,title:l.ZP.t("Global.Date")},{key:"type",dataIndex:"type",className:"hasTile",title:l.ZP.t("Global.Type")}]}}},41280:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(38056),n=(a(95171),a(34234)),s=(a(27378),a(46322)),i=(a(30414),JSON.parse('{"AW":"/asasdasd/wallet/*"}'));class r{constructor(){this.entity="/wallets",this.title=[l.ZP.t("Wallets.Title"),l.ZP.t("Wallets.Title",{count:2})],this.apiService=new n.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${i.AW.replace("*","")}`}],this.detailColumns=[],this.tableColumns=[{key:"user-id",dataIndex:["user","id"],title:l.ZP.t("Global.ID"),render:(e,t)=>(0,s.XD)(e,t.id)},{key:"uuid",dataIndex:"uuid",className:"hasTile",title:l.ZP.t("Wallets.UUID")},{key:"balance",dataIndex:"balance",className:"hasTile number",title:l.ZP.t("Wallets.Balance")},{key:"user",dataIndex:"user",className:"hasTile",render:s.Pb,title:l.ZP.t("Wallets.FullName")},{key:"created_at",className:"hasTile",render:s.JK,dataIndex:"created_at",title:l.ZP.t("Wallets.CreatedAt")}]}}},23903:function(e,t,a){a(30414)},97330:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(27378),n=a(96740),s=a(33996),i=a(50836),r=a(60071),c=a(26761),d=(a(30414),a(41280)),u=(a(23903),a(96297));var o=()=>{const e=new u.Z;return l.createElement(s.Xg,{module:e},l.createElement(s.Xg.Panel,null,l.createElement(s.s_.Header,{hasSearch:!0,hasNew:!1,noDescription:!0}),l.createElement(s.s_.ListView,{module:e,hasUpdate:!1})))};var m=()=>{const e=new d.Z;return l.createElement(s.Xg,{module:e},l.createElement(s.Xg.Panel,null,l.createElement(s.s_.Header,{hasSearch:!0,hasNew:!1,noDescription:!0}),l.createElement(s.s_.ListView,{module:e,hasUpdate:!1,noId:!0})))};var b=()=>{const{t:e}=(0,r.$)(),[t,a]=(0,l.useState)("1");return l.createElement(s.Xg,{module:new d.Z},l.createElement(s.Xg.Breadcrumb,null),l.createElement(h,null,l.createElement(i.Z,{type:"card",defaultActiveKey:"1",className:"wallet-setting-tabs",activeKey:t,destroyInactiveTabPane:!0,onChange:e=>a(e)},l.createElement(i.Z.TabPane,{key:"1",tab:e("Wallets.Title",{count:2})},l.createElement(m,null)),l.createElement(i.Z.TabPane,{key:"2",tab:e("Wallets.Transaction.Title",{count:2})},l.createElement(o,null)))))};const h=c.ZP.div`
  padding: 32px 16px;
  border-radius: 12px;
  background: #fff;
  margin-top: 16px;

  & .content {
    padding: 12px 0;
  }

  & .competition-tabs .ant-tabs-nav-list {
    margin-left: 0;

    & .ant-tabs-tab {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    & .ant-tabs-tab-active {
      background-color: #009ddc;

      & .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
`;function p(){return l.createElement(n.Z5,null,l.createElement(n.AW,{path:"",element:l.createElement(b,null)}))}}}]);