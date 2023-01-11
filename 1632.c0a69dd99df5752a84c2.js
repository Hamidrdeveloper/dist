"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1632],{87435:function(e,t,a){a.d(t,{Z:function(){return ie}});var n=a(33996),l=a(35062),r=a(72961),i=a(56591),o=a(26490),s=a(10374),c=a(27378),m=(a(83513),a(60071)),d=a(96740),p=a(26761),u=a(75660),E=a(3288),g=a(9172);var v=({treeType:e="graph",onChangeTreeType:t})=>{const{t:a}=(0,m.$)();return c.createElement(Z,null,c.createElement(o.Z.Text,{className:"title"},c.createElement(u.Z,null)," ",a("Global.Filter"),":"),c.createElement(E.Z,{layout:"inline"},c.createElement(E.Z.Item,{label:a("Global.OverviewType")},c.createElement(g.Z,{value:e,style:{width:120},onChange:t,placeholder:a("Partner.Field.SelectTreeType")},c.createElement(g.Z.Option,{value:"graph"},a("Partner.Field.Graphic")),c.createElement(g.Z.Option,{value:"list"},a("Partner.Field.ListView"))))))};const Z=p.ZP.div`
  display: flex;
  align-items: center;

  & .title {
    margin-right: 16px;
  }
`;a(98809);var x=a(61985),h=(a(2010),a(14206)),f=a.n(h),b=(a(99239),function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function i(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){e.done?a(e.value):l(e.value).then(i,o)}s((n=n.apply(e,t||[])).next())}))});const y=e=>{var t;return{name:null===(t=e.person)||void 0===t?void 0:t.full_name,attributes:{id:e.user_id,email:e.email,active:e.is_active,coach:e.coach_full_name,level:e.career_step_name,sponsor:e.sponsor_full_name,avatar:e.avatar?x.Xb.PURE_URL+e.avatar:"/assets/images/global/avatar.png"},children:e.children.map(y)}},N=e=>{var t;return{id:e.id,email:e.email,userId:e.user_id,active:e.is_active,level:e.career_step_name,fullName:null===(t=e.person)||void 0===t?void 0:t.full_name,coachFullName:e.coach_full_name,sponsorFullName:e.sponsor_full_name,children:e.children.map(N),avatar:e.avatar?x.Xb.PURE_URL+e.avatar:"/assets/images/global/avatar.png"}},D=({depth:e,partnerId:t})=>b(void 0,void 0,void 0,(function*(){try{const a=yield f().request({method:"get",params:{depth:e},url:`/partners/descendants/${t}`});return{fullData:y(a.data),singleData:N(a.data)}}catch(e){throw new Error(e)}}));var T=a(77084),F=a.n(T),_=(a(64622),a(96188)),w=a(12482),k=a(63724),S=a(28791),P=a(27707),C=a(89366),z=a(23425),U=a(529),I=a(60042),G=a.n(I);const j=["","#38B153","#009DDC","#F7617D","#38B153","#FF8F78","#991b2a"],$=p.ZP.div`
  width: 350px;
  display: flex;
  gap: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  position: relative;
  border: 1px solid ${e=>e.color};

  & .add-container {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    background: #fff;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: ${e=>e.color};
  }

  & .more-container {
    position: absolute;
    right: 16px;
    top: 16px;

    & .more-icon {
      font-size: 1.2rem;
    }
  }

  & .avatar {
    text-align: center;

    & .avatar-img {
      width: 80px;
      height: 80px;
      border: 1px solid #9d9d9d;
    }

    & .status {
      padding: 8px 0;
      color: green;

      &.inactive {
        color: red;
      }
    }
  }

  & .description,
  & .info {
    display: flex;
    flex-direction: column;
  }

  & .name {
    font-size: 1.1rem;
  }

  & .info {
    padding: 8px 0;
  }
`;var M=({nodeData:e,toggleNode:t,openModal:a})=>{var n,l,r,i,s,m,d,p,u,E,g,v;const Z=c.createElement(C.Z,null,c.createElement(C.Z.Item,{key:"0",onClick:()=>{var t;return a(null===(t=e.attributes)||void 0===t?void 0:t.id)}},"Show Partner Info"));return c.createElement(c.Fragment,null,c.createElement("circle",{r:6}),c.createElement("foreignObject",Object.assign({},{width:350,height:250,x:-175,y:25}),c.createElement($,{color:j[(null===(n=e.attributes)||void 0===n?void 0:n.level)?Number(null===(l=e.attributes)||void 0===l?void 0:l.level[0]):1]},(e.children||[]).length>0&&c.createElement(c.Fragment,null,e.__rd3t.collapsed?c.createElement("div",{className:"add-container",onClick:t},c.createElement(_.Z,null)):c.createElement("div",{className:"add-container",onClick:t},c.createElement(w.Z,null))),c.createElement("div",{className:"more-container"},c.createElement(z.Z,{overlay:Z,trigger:["click"]},c.createElement(k.Z,{className:"more-icon"}))),c.createElement("div",{className:"avatar"},c.createElement(U.Z,{className:"avatar-img",src:null===(r=e.attributes)||void 0===r?void 0:r.avatar}),c.createElement("div",{className:G()("status",{inactive:!(null===(i=e.attributes)||void 0===i?void 0:i.active)})},(null===(s=e.attributes)||void 0===s?void 0:s.active)?c.createElement(c.Fragment,null,c.createElement(S.Z,null)," ",c.createElement("span",null,"Active")):c.createElement(c.Fragment,null,c.createElement(P.Z,null)," ",c.createElement("span",{style:{fontSize:12}},"Not Active")))),c.createElement("div",{className:"description"},c.createElement(o.Z.Text,{strong:!0},e.name),(null===(m=e.attributes)||void 0===m?void 0:m.level)&&c.createElement("div",{className:"level"},c.createElement(o.Z.Text,null,null===(d=e.attributes)||void 0===d?void 0:d.level)),c.createElement("div",{className:"info"},""!==String(null===(p=e.attributes)||void 0===p?void 0:p.sponsor).trim()&&c.createElement(o.Z.Text,{type:"secondary"},"Sponsor : ",null===(u=e.attributes)||void 0===u?void 0:u.sponsor),""!==String(null===(E=e.attributes)||void 0===E?void 0:E.coach).trim()&&c.createElement(o.Z.Text,{type:"secondary"},"Coach : ",null===(g=e.attributes)||void 0===g?void 0:g.coach)),c.createElement("div",{className:"email"},c.createElement(o.Z.Text,null,null===(v=e.attributes)||void 0===v?void 0:v.email))))))},O=a(55845),L=a(31675),V=a(50836),R=a(12921),B=a(14939);var A=({user:e})=>{var t,a,n,r,i,d,p,u,E,g,v,Z;const{t:x}=(0,m.$)();return c.createElement(X,null,c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Global.Username")," ")),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.username))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Global.FirstName"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.person.first_name))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Global.LastName"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.person.last_name))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},"Gender")),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.person.gender))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Global.Email"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.email))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Partner.Field.Company"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.person.company_name))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Global.Country"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null!==(a=null===(t=e.country)||void 0===t?void 0:t.name)&&void 0!==a?a:" - "))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("Global.Language"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.language.title))),e.sponsor_id&&c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.Sponsor"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null===(i=null===(r=null===(n=null==e?void 0:e.sponsor)||void 0===n?void 0:n.user)||void 0===r?void 0:r.person)||void 0===i?void 0:i.full_name))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.TaxNumber"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null!==(d=e.tax_number)&&void 0!==d?d:"-"))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.VatNumber"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null!==(p=e.vat_number)&&void 0!==p?p:"-"))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.EoriNumber"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null!==(u=e.eori_number)&&void 0!==u?u:"-"))),e.paymentMethod&&c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.DefaultPaymentTerm"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null!==(g=null===(E=e.paymentMethod)||void 0===E?void 0:E.name)&&void 0!==g?g:" - "))),e.shippingMethod&&c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.DefaultShippingMethod"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},null!==(Z=null===(v=e.shippingMethod)||void 0===v?void 0:v.name)&&void 0!==Z?Z:" - "))),e.paymentTerm&&c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.DefaultPaymentTerm"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.paymentTerm.description))),c.createElement(l.Z,{className:"single"},c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{strong:!0},x("User.Field.UserDiscount"))),c.createElement(s.Z,{span:12},c.createElement(o.Z.Text,{style:{color:"#9D9D9D"}},e.discount_ratio))))};const X=p.ZP.div`
  & .single {
    padding: 8px 0;
  }
`;var W=a(75095);const{TabPane:K}=V.Z;var q=({userId:e,isVisible:t,setVisible:a})=>{var i,d;const p=new W.Z,[u,E]=(0,c.useState)(!0),[g,v]=(0,c.useState)({});(0,c.useEffect)((()=>{e&&(E(!0),(e=>b(void 0,void 0,void 0,(function*(){try{return(yield f().get(`/users/${e}`)).data.data}catch(e){throw new Error(e)}})))(e).then((e=>{v(e),E(!1)})))}),[e]);const Z=()=>{E(!0),v({}),a(!t)},{t:h}=(0,m.$)();return c.createElement(B.Z,{width:750,footer:!1,destroyOnClose:!0,closable:!1,visible:t,onCancel:Z,title:c.createElement(n.xB,{onClose:Z,items:[...p.breadcrumbItems||[],{path:"",breadcrumbName:p.title[0]}]})},c.createElement(J,null,u&&0===Object.keys(g).length?c.createElement(n.aN,null):c.createElement(c.Fragment,null,c.createElement(l.Z,{className:"avatar"},c.createElement(s.Z,{span:24},c.createElement(R.C,{className:"avatar-img",src:g.avatar?x.Xb.PURE_URL+g.avatar:"/assets/images/global/avatar.png"}))),c.createElement(l.Z,{className:"title"},c.createElement(s.Z,{span:24},c.createElement(o.Z.Title,{style:{margin:0},level:4},g.person.full_name)),c.createElement(s.Z,{span:24},c.createElement(o.Z.Text,{className:"location"},c.createElement(O.Z,null)," ",c.createElement("span",null,null!==(d=null===(i=g.country)||void 0===i?void 0:i.name)&&void 0!==d?d:" - "," , ",g.language.title)))),c.createElement(l.Z,{className:"info",justify:"space-between"},g.partner&&c.createElement(s.Z,null,c.createElement(r.Z,{size:"large"},c.createElement(o.Z.Title,{level:5},"Sponsor : ",c.createElement("span",null,g.partner.sponsors_count)),c.createElement(o.Z.Title,{level:5},"Partner : ",c.createElement("span",null,g.partner.partners_count)))),c.createElement(s.Z,null,c.createElement(o.Z.Text,{className:"join-date"},h("User.Field.JoinedToCleafinOn"),(0,L.Wb)(new Date(g.created_at))))),c.createElement(l.Z,{className:"tabs"},c.createElement(s.Z,{span:24},c.createElement(V.Z,{defaultActiveKey:"1"},c.createElement(K,{tab:h("User.PersonalInfo.Title"),key:"1"},c.createElement(A,{user:g}))))))))};const J=p.ZP.div`
  & .avatar {
    & .avatar-img {
      width: 80px;
      height: 80px;
      border: 1px solid #d9d9d9;
    }
  }

  & .title {
    margin: 16px 0;

    & .location {
      margin-top: 4px;
      color: ${e=>e.theme.colors.main};
    }
  }

  & .info {
    & .join-date {
      color: #009ddc;
    }

    & h5 {
      color: #9d9d9d;

      & span {
        color: #4a5161;
      }
    }
  }

  & .tabs {
    margin-top: 24px;
  }
`;var Q=c.memo((function(e){const[t,a]=(0,c.useState)(!1),[n,l]=(0,c.useState)(),r=e=>{a(!0),l(e)};return c.createElement(c.Fragment,null,c.createElement(F(),{pathFunc:"elbow",data:e.data,depthFactor:250,initialDepth:2,orientation:"vertical",enableLegacyTransitions:!0,svgClassName:"partner-tree",nodeSize:{x:400,y:200},translate:{x:700,y:100},renderCustomNodeElement:({nodeDatum:e,toggleNode:t})=>c.createElement(M,{nodeData:e,toggleNode:t,openModal:r})}),n&&c.createElement(q,{userId:n,isVisible:t,setVisible:a}))}),((e,t)=>e.data===t.data)),Y=a(52314),H=a(24539),ee=a(58229);const te=["","#38B153","#009DDC","#F7617D","#38B153","#FF8F78","#991b2a"],ae=p.ZP.div`
  width: 420px;
  display: flex;
  gap: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  position: relative;
  border: 1px solid ${e=>e.color};

  & .add-container {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    background: #fff;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: ${e=>e.color};
  }

  & .more-container {
    position: absolute;
    right: 16px;
    top: 16px;

    & .more-icon {
      font-size: 1.2rem;
    }
  }

  & .avatar {
    text-align: center;

    & .avatar-img {
      width: 80px;
      height: 80px;
      border: 1px solid #9d9d9d;
    }

    & .status {
      padding: 8px 0;
      color: green;

      &.inactive {
        color: red;
      }
    }
  }

  & .description,
  & .info {
    display: flex;
    flex-direction: column;
  }

  & .name {
    font-size: 1.1rem;
  }

  & .info {
    padding: 8px 0;
  }
`;var ne=({data:e,openModal:t})=>{const a=c.createElement(C.Z,null,c.createElement(C.Z.Item,{key:"0",onClick:()=>t(e.userId)},"Show Partner Info"));return c.createElement(ae,{color:te[e.level?Number(e.level[0]):1]},c.createElement("div",{className:"more-container"},c.createElement(z.Z,{overlay:a,trigger:["click"]},c.createElement(k.Z,{className:"more-icon"}))),c.createElement("div",{className:"avatar"},c.createElement(U.Z,{className:"avatar-img",src:e.avatar}),c.createElement("div",{className:G()("status",{inactive:!e.active})},e.active?c.createElement(c.Fragment,null,c.createElement(S.Z,null)," ",c.createElement("span",null,"Active")):c.createElement(c.Fragment,null,c.createElement(P.Z,null)," ",c.createElement("span",null,"Not Active")))),c.createElement("div",{className:"description"},c.createElement(o.Z.Text,{strong:!0},e.fullName),c.createElement("div",{className:"level"},c.createElement(o.Z.Text,null,e.level)),c.createElement("div",{className:"info"},""!==String(e.sponsorFullName).trim()&&c.createElement(o.Z.Text,{type:"secondary"},"Sponsor : ",e.sponsorFullName),""!==String(e.coachFullName).trim()&&c.createElement(o.Z.Text,{type:"secondary"},"Coach : ",e.coachFullName)),c.createElement("div",{className:"email"},c.createElement(o.Z.Text,null,e.email))))};var le=({parent:e})=>{const[t,a]=(0,c.useState)(!1),[n,i]=(0,c.useState)(),[o,m]=(0,c.useState)([]),d=e=>{a(!0),i(e)};return(0,c.useEffect)((()=>{e&&e.children.length>0&&m(e.children)}),[e]),c.createElement(re,null,c.createElement("div",{className:"single-partner "+(e.children.length>0?"has-child":"")},c.createElement(ne,{data:e,openModal:d})),e.children.length>0&&c.createElement(ee.ZP,{treeData:o,canDrag:()=>!1,getNodeKey:({node:{id:e}})=>e,generateNodeProps:({node:e})=>({style:{minWidth:"420px",borderRadius:"4px",background:"#F5FBFF",border:"1px solid #C9E9FF"},title:c.createElement(l.Z,{justify:"space-between",align:"middle"},c.createElement(s.Z,null,c.createElement(r.Z,null,c.createElement(Y.Z,null),c.createElement("span",null,c.createElement("span",null,e.fullName)," ",c.createElement("span",null,"(",e.id,")")," ",e.level&&c.createElement("span",null,"(",e.level,")")))),c.createElement(s.Z,null,c.createElement("div",{className:"info",onClick:()=>d(e.userId)},c.createElement(H.Z,{style:{fontSize:"18px"}}))))}),onChange:e=>m(e)}),n&&c.createElement(q,{userId:n,isVisible:t,setVisible:a}))};const re=p.ZP.div`
  height: 100vh;
  padding: 24px;

  & .rst__rowLabel {
    width: 100%;

    & .info {
      display: flex;
      cursor: pointer;
    }
  }

  & .single-partner {
    padding-left: 45px;
    padding-bottom: 20px;
    position: relative;

    &.has-child {
      &::before {
        content: '';
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 1px;
        background: linear-gradient(to right, transparent 50%, #fff 50%),
          linear-gradient(to right, #009ddc, #fff);
        background-size: 16px 2px, 16px 100%;
      }

      &::after {
        content: '';
        position: absolute;
        left: 22px;
        top: 50%;
        width: 1px;
        height: 75%;
        background: linear-gradient(to bottom, transparent 50%, #fff 50%),
          linear-gradient(to bottom, #009ddc, #fff);
        background-size: 2px 16px, 100% 16px;
      }
    }
  }
`;var ie=({partner:e})=>{const t=(0,d.UO)(),[a,p]=(0,c.useState)("list"),[u,E]=(0,c.useState)("graph"),[g,Z]=(0,c.useState)(!0),[x,h]=(0,c.useState)(),[f,b]=(0,c.useState)({}),{t:y}=(0,m.$)();(0,c.useEffect)((()=>{(t.partner_id||e)&&N(4)}),[t.partner_id,e,4]);const N=a=>{const n=t.partner_id?Number(t.partner_id):e||0;D({depth:a,partnerId:n}).then((({fullData:e,singleData:t})=>{Z(!1),b(e),h(t)}))};return c.createElement(l.Z,null,c.createElement(me,null,c.createElement(oe,null,c.createElement(r.Z,null,c.createElement(i.Z,{size:"large",type:"primary",ghost:"graph"!==u,onClick:()=>E("graph")},y("Global.graphSheet")),c.createElement(i.Z,{size:"large",type:"primary",ghost:"dot"!==u,onClick:()=>E("dot")},y("Partner.Field.DotSheet")),c.createElement(i.Z,{size:"large",type:"primary",ghost:"white"!==u,onClick:()=>E("white")},y("Partner.Field.WhiteSheet"))),c.createElement(v,{treeType:a,onChangeTreeType:e=>p(e)})),c.createElement(ce,{className:u},c.createElement(se,null,c.createElement(r.Z,{size:"large"},c.createElement(o.Z.Title,{level:2,className:"title"},y("Global.TreeGenealogy")))),g?c.createElement(n.aN,null):c.createElement(c.Fragment,null,"graph"===a&&f&&c.createElement(Q,{data:f}),"list"===a&&x&&c.createElement(l.Z,{style:{marginTop:100},justify:"space-between"},c.createElement(s.Z,null,c.createElement(le,{parent:x})))))))};const oe=p.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,se=p.ZP.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .title {
    margin: 0;
  }

  & .info {
    display: flex;
    align-items: center;
    padding: 8px;
    color: #4a5161;
    background: #fff;
    border: 1px solid #009ddc;

    & .list {
      display: flex;
      margin-left: 16px;
      align-items: center;
      gap: 16px;

      & .single {
        display: flex;
        align-items: center;

        & span:first-child {
          height: 15px;
          display: flex;
          align-items: center;
          font-size: 2.5rem;
          margin-right: 4px;
        }
      }
    }
  }
`,ce=p.ZP.div`
  width: 100%;
  min-height: 140vh;
  margin-top: 16px;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  border: 1px solid #aaaaaa;
  padding-bottom: 32px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  &.white::after {
    background: #fff;
  }

  &.dot::after {
    background-size: 30px 30px;
    background-image: radial-gradient(circle, #bebebe 1px, rgba(0, 0, 0, 0) 1px);
  }

  &.graph,
  &.white,
  &.dot {
    height: 100vh;
  }

  &.graph::after {
    opacity: 0.08;
    background: url('http://i.stack.imgur.com/GySvQ.png');
  }

  & .partner-tree {
    & path.rd3t-link {
      stroke-dasharray: 6;
      stroke: #009ddc;
    }

    & circle {
      fill: #009ddc;
      stroke: #009ddc;
    }
  }
`,me=p.ZP.div`
  width: 100%;
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  margin-top: 16px;
`},94:function(e,t,a){a(99239)},3487:function(e,t,a){a.d(t,{j:function(){return n}});const n=a(26761).ZP.div`
  padding: 32px;
  .header {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #ededed;
  }
`}}]);