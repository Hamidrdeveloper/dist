"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2174],{59222:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(38056),l=(n(95171),n(9280)),i=n(27378);n(50522);n(66625);var r=n(92416),o=n(50644);class s{constructor(){this.entity="http://88.198.95.174:2020/ClubAdmin/GetAllChants",this.title=["Chant","Chant"],this.apiService=new l.V(this.entity,this.title[0]),this.UpsertComponent=(0,i.lazy)((()=>Promise.resolve().then(n.bind(n,29096)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${r.AW.replace("*","")}`}],this.detailColumns=[{key:"id",label:"ID"},{key:"title",label:"Title"},{key:"duration_MSC",label:"duration_MSCc",render:o.iO},{key:"chantTypeFileUrl",label:a.ZP.t("Availability.Field.File"),render:o.zg}],this.tableColumns=[{width:180,key:"title",dataIndex:"title",className:"hasTile",title:"Title"},{width:150,key:"duration_MSC",dataIndex:"duration_MSC",className:"number hasTile",title:"Duration_MSC",render:o.iO},{width:150,key:"chantTypeFileUrl",dataIndex:"chantTypeFileUrl",render:o.zg,title:a.ZP.t("Availability.Field.File")}]}}},29096:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});n(95171);var a=n(34234),l=n(27378),i=n(56552),r=n(59222),o=n(33996),s=n(3288),c=n(35062),d=n(10374),m=n(97851),u=n(25724),p=n(1269),h=n(48158),g=n(2133),b=n(60071),E=(n(66625),n(80183),n(34604));var f={MainDiv:n(26761).ZP.div`
.FirstBorder{
    overflow: hidden;
align-items: center;
display: flex;
border: 1px solid rgb(255, 0, 203);
width: 100%;
height: 65px;
background-color: rgba(255, 0, 167, 0.1);
border-radius: 15px;
}
.vibrate{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #320748;
    margin: 25px;
}
.Light{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffd400;
    margin: 25px;
}
.timing{
    overflow: hidden;
    margin-bottom: 30px;
}
.ant-row-box-text{
    width: 230px;
    height: 30px;
    background: #fff;
    border-radius: 15px;
    text-align: center;
    margin: 15px;
}
.TwoBorder{
    overflow: hidden;
align-items: center;
display: flex;
border: 1px solid rgb(47, 0, 60);
width: 100%;
height: 65px;
background-color: rgba(47, 0, 60, 0.1);
border-radius: 15px;

}
.ThreeBorder{
    overflow: hidden;
align-items: center;
display: flex;
border: 1px solid rgb(224, 220, 1);
width: 100%;
height: 65px;
background-color: rgba(224, 220, 1, 0.1);
border-radius: 15px;
}
.FourBorder{
    overflow: hidden;
align-items: center;
display: flex;
border: 1px solid rgb(0 76 247);
width: 100%;
height: 65px;

background-color: rgba(242 ,250  ,253, 1);
border-radius: 15px;

}
.ant-row-box{
    align-items: center;

}
`},y=n(19504),v=n(19830),Z=n(96740),x=n(46226),w=n(31080),C=n(43118),S=n(38056),k=(n(9378),n(70045));var F=({onSubmit:e,initialValues:t,isPending:n,onChange:a})=>{const{t:i}=(0,b.$)(),[r]=s.Z.useForm(),{pathname:S}=(0,Z.TH)(),[F,I]=((0,Z.s0)(),(0,l.useState)([]));(0,l.useEffect)((()=>{(null==t?void 0:t.duration_MSC)&&(console.log(t),I([...Array(t.duration_MSC/1e3).keys()]),r.setFieldsValue(t))}),[t]);return l.createElement(s.Z,{form:r,layout:"vertical",name:"availability-form",onFinish:e,initialValues:{}},l.createElement(c.Z,{justify:"space-between",gutter:16},l.createElement(d.Z,{span:12},l.createElement(s.Z.Item,{label:"Title",name:"title",rules:[{required:!0}]},l.createElement(m.Z,{placeholder:"Title"}))),l.createElement(d.Z,{span:12},l.createElement(s.Z.Item,{label:"Point",name:"point",rules:[{required:!0}]},l.createElement(u.Z,{placeholder:"Point"}))),l.createElement(d.Z,{span:12},l.createElement(s.Z.Item,{label:"Type",name:"chantTypeId",rules:[{required:!0}]},l.createElement(E.Z,null))),l.createElement(d.Z,{span:12},l.createElement(s.Z.Item,{label:"Duration_MSC",name:"duration_MSC",valuePropName:"date",rules:[{required:!0}]},l.createElement(p.Z,{format:"mm:ss",placeholder:"Duration_MSC"}))),l.createElement(d.Z,{xs:12,style:{alignSelf:"end"}},l.createElement(s.Z.Item,{name:"isActive",valuePropName:"checked"},l.createElement(h.Z,null,"Is Active"))),l.createElement("div",{style:{overflowX:"scroll"}},(null==t?void 0:t.duration_MSC)?l.createElement(d.Z,{span:24},l.createElement(f.MainDiv,null,l.createElement(d.Z,{span:240},l.createElement(c.Z,{gutter:0},l.createElement(d.Z,{span:3},l.createElement("label",{htmlFor:"message"},"Timing:")),l.createElement(d.Z,{span:21},l.createElement("div",{className:"timing",style:{width:60*F.length}},l.createElement(c.Z,{justify:"space-between",gutter:12},F.map((e=>l.createElement(d.Z,{style:{paddingRight:30}},l.createElement("div",null,l.createElement("label",{htmlFor:"message"},e)))))),l.createElement(g.Z,null))))),l.createElement(c.Z,{justify:"space-between",style:{rowGap:24},gutter:24},l.createElement(d.Z,{span:24},l.createElement(c.Z,{className:"ant-row-box",style:{rowGap:24},gutter:24},l.createElement(d.Z,{span:2},l.createElement("label",{htmlFor:"message"},"lyric:")),l.createElement(d.Z,{span:1},l.createElement(x.Z,{value:t.id,onChange:()=>a()})),l.createElement(d.Z,{span:21},l.createElement("div",{className:"FirstBorder",style:{width:60*F.length}},t.chant_Lyric_List.map((e=>l.createElement("div",{className:"ant-row-box-text",key:e.id},l.createElement("label",{className:"label-text",maxlength:"30"},e.lyric_Sentence.substring(0,20)+"...")))))))),l.createElement(d.Z,{span:24},l.createElement(c.Z,{className:"ant-row-box",style:{rowGap:24},gutter:24},l.createElement(d.Z,{span:2},l.createElement("label",{htmlFor:"message"},"Vibrate:")),l.createElement(d.Z,{span:1},l.createElement(C.Z,{value:t.id,onChange:()=>a()})),l.createElement(d.Z,{span:21},l.createElement("div",{className:"TwoBorder",style:{width:60*F.length}},t.chant_Vibrate_List.map((e=>l.createElement("div",{className:"vibrate",key:e.id},l.createElement(y.Z,{style:{fontSize:"25px",color:"#fff"}})))))))),l.createElement(d.Z,{span:24},l.createElement(c.Z,{className:"ant-row-box",style:{rowGap:24},gutter:24},l.createElement(d.Z,{span:2},l.createElement("label",{htmlFor:"message"},"Light:")),l.createElement(d.Z,{span:1},l.createElement(w.Z,{value:t.id,onChange:()=>a()})),l.createElement(d.Z,{span:21},l.createElement("div",{className:"ThreeBorder",style:{width:60*F.length}},t.chant_Light_List.map((e=>l.createElement("div",{className:"Light",key:e.id},l.createElement(v.Z,{style:{fontSize:"25px",color:"#fff"}})))))))),l.createElement(d.Z,{span:24},l.createElement(c.Z,{className:"ant-row-box",style:{rowGap:24},gutter:24},l.createElement(d.Z,{span:2},l.createElement("label",{htmlFor:"message"},"Audio:")),l.createElement(d.Z,{span:1},l.createElement(k.l,{value:t.id,onChange:()=>a()})),l.createElement(d.Z,{span:21},l.createElement("div",{className:"FourBorder",style:{width:60*F.length}},t.chant_Audio_List.length>0?F.map((e=>l.createElement("img",{style:{height:50},src:"../../../assets/images/global/eqlizer.png"}))):null))))))):null,l.createElement("div",{style:{height:50}}))),l.createElement(o.Ow,{isPending:n}))};var I=({onUpdate:e,closeModal:t,singleData:n})=>{new r.Z;const[o,s]=(0,l.useState)(!1),c=[S.ZP.t("ShippingProfile.Title"),S.ZP.t("ShippingProfile.Title",{count:2})],d=new a.Vx("http://88.198.95.174:2020/ClubAdmin/AddChant",c[0]),m=new a.Vx("http://88.198.95.174:2020/ClubAdmin/EditBoard",c[0]),{mutate:u,isLoading:p}=(0,i.useMutation)((({id:e,values:t})=>e?m.updateOne(e,t):d.createOne(t)));return l.createElement(F,{onChange:e,initialValues:n,onSubmit:a=>{var l;let i;console.log(a),s(!0);const r=new Date(a.duration_MSC),o=6e4*parseInt(r.getMinutes()+"")+1e3*parseInt(r.getSeconds()+"");i=(null==n?void 0:n.id)?Object.assign(Object.assign({},a),{clubId:1,adminId:12,ChantTypeId:a.chantTypeId.id,ChantId:n.id,duration_MSC:o}):Object.assign(Object.assign({},a),{clubId:1,adminId:12,chantTypeId:null===(l=null==a?void 0:a.chantTypeId)||void 0===l?void 0:l.id,duration_MSC:o}),u({id:n?n.id:void 0,values:i},{onSuccess:n=>{e(n),null===onCallback||void 0===onCallback||onCallback(n),null==t||t()}}),s(!1)},isPending:o})}},66625:function(e,t,n){n(95171)},8531:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(38056),l=n(33996),i=(n(95171),n(34234)),r=n(27378),o=(n(56762),n(54370));class s{constructor(){this.entity="http://88.198.95.174:2020/ClubAdmin/GetAllChant_Audio",this.title=[a.ZP.t("Country.Title"),a.ZP.t("Country.Title",{count:2})],this.apiService=new i.Vx(this.entity,this.title[0]),this.UpsertComponent=(0,r.lazy)((()=>Promise.resolve().then(n.bind(n,89425)))),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${o.AW.replace("*","")}`}],this.detailColumns=[{key:"color",label:a.ZP.t("Flag.Field.Color")},{key:"icon",label:a.ZP.t("Flag.Field.Icon")}],this.tableColumns=[{key:"name",width:120,dataIndex:"name",className:"hasTile",title:a.ZP.t("Global.Name")},{key:"icon",dataIndex:"icon",className:"hasTile",title:a.ZP.t("Flag.Field.Icon"),render:(e,t)=>l.f[e]?l.f[e]({color:t.color}):"-"}],this.icons=[{key:1,icon:"FaBell"},{key:2,icon:"FaStar"},{key:3,icon:"FaLock"},{key:4,icon:"FaExclamationCircle"},{key:5,icon:"FaExclamationTriangle"},{key:6,icon:"FaBomb"},{key:7,icon:"FaCloudShowersHeavy"},{key:8,icon:"FaCloudMoonRain"},{key:9,icon:"FaCloudMeatball"},{key:10,icon:"FaSun"},{key:11,icon:"FaFlag"}]}}},89425:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(95171);var a=n(34234),l=n(27378),i=n(56552),r=n(33996),o=n(3288),s=n(35062),c=n(10374),d=n(97851),m=n(1269),u=n(48158),p=n(60071),h=n(26761),g=n(8531);n(56762);function b({onSubmit:e,isPending:t,initialValues:n}){const[a]=o.Z.useForm(),{t:i}=(0,p.$)();new g.Z;return(0,l.useEffect)((()=>{n&&a.setFieldsValue(n)}),[n]),l.createElement(o.Z,{form:a,layout:"vertical",onFinish:e,name:"flag-form",initialValues:{}},l.createElement(s.Z,{gutter:[16,0]},l.createElement(c.Z,{xs:12},l.createElement(o.Z.Item,{name:"title",label:"Title",rules:[{required:!0}]},l.createElement(d.Z,{placeholder:"Title"}))),l.createElement(c.Z,{xs:12},l.createElement(o.Z.Item,{name:"startTime_ms",label:"Start Time ms",rules:[{required:!0}],valuePropName:"date"},l.createElement(m.Z,{format:"mm:ss",placeholder:"Start Time"}))),l.createElement(c.Z,{xs:12},l.createElement(o.Z.Item,{name:"duration_ms",label:"Duration_ms",rules:[{required:!0}],valuePropName:"date"},l.createElement(m.Z,{format:"mm:ss",placeholder:"Duration_ms"}))),l.createElement(c.Z,{xs:12,style:{alignSelf:"end"}},l.createElement(o.Z.Item,{name:"isActive",valuePropName:"checked"},l.createElement(u.Z,null,"Is Active"))),l.createElement(c.Z,{xs:12,style:{alignSelf:"end"}},l.createElement(o.Z.Item,{name:"file",fieldKey:"file",label:i("Availability.Field.File")},l.createElement(r.gq,{form:a,idName:"file_id"})),l.createElement(o.Z.Item,{name:"file_id",hidden:!0},l.createElement(l.Fragment,null)))),l.createElement(r.Ow,{isPending:t}))}h.ZP.div`
  display: flex;
  align-items: center;

  & .icon {
    font-size: 1rem;
    margin-top: 4px;
    margin-right: 8px;
  }
`;var E=n(38056);var f=({chantId:e,onCallback:t,singleData:n})=>{const r=new g.Z,o=[E.ZP.t("ShippingProfile.Title"),E.ZP.t("ShippingProfile.Title",{count:2})],s=new a.Vx("http://88.198.95.174:2020/ClubAdmin/AddChant_Audio",o[0]),{mutate:c,isLoading:d}=(0,i.useMutation)((({id:e,values:t})=>e?r.apiService.updateOne(e,t):s.createOne(t)));return l.createElement(b,{initialValues:n,onSubmit:a=>{const l=new Date(a.duration_MSC),i=new Date(a.startTime_ms),r=6e4*parseInt(i.getMinutes()+"")+1e3*parseInt(i.getSeconds()+""),o=6e4*parseInt(l.getMinutes()+"")+1e3*parseInt(l.getSeconds()+""),s=Object.assign(Object.assign({},a),{clubId:1,adminId:12,chantId:e,duration_MSC:o,startTime_ms:r});c({id:n?n.id:void 0,values:s},{onSuccess:t})},isPending:d})}},70045:function(e,t,n){n.d(t,{l:function(){return E}});n(33996);var a=n(56591),l=n(39338),i=n(27378),r=n(60071),o=n(26761),s=(n(56762),n(59748)),c=n(8531),d=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{s(a.next(e))}catch(e){i(e)}}function o(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){e.done?n(e.value):l(e.value).then(r,o)}s((a=a.apply(e,t||[])).next())}))};const m=(0,l.cn)([]),u=new c.Z,p=(0,s.el)((e=>({queryKey:["flags",e(m)],queryFn:()=>d(void 0,void 0,void 0,(function*(){return yield(yield u.apiService.getAll({pagination:{per_page:10},params:{isActive:!0}})).data}))})));var h=n(21244),g=n(89425),b=n(48955);var E=function({value:e,onChange:t,isMulti:n=!1,disabled:o=!1,isPending:s=!1}){const{t:c}=(0,r.$)(),[d,m]=(0,i.useState)(!1),[u,E]=(0,l.KO)(p);return i.createElement(i.Fragment,null,i.createElement(a.Z,{type:"primary",ghost:!0,icon:i.createElement(h.Z,null),onClick:e=>m(!0)}),i.createElement(b.Z,{isVisible:d,setVisible:m,title:"Audio"},i.createElement(g.default,{chantId:e,onCallback:()=>{E({type:"refetch"}),t()}})))};o.ZP.div`
  display: flex;
  align-items: center;

  & .icon {
    font-size: 1rem;
    margin-top: 4px;
    margin-right: 8px;
    & svg {
      color: ${e=>e.color} !important;
    }
  }
`},34604:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(49989),l=n(48955),i=n(34234),r=n(39338),o=n(27378),s=n(62500),c=(n(10110),n(59748)),d=n(91257),m=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{s(a.next(e))}catch(e){i(e)}}function o(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){e.done?n(e.value):l(e.value).then(r,o)}s((a=a.apply(e,t||[])).next())}))};const u=(0,r.cn)([]),p=new d.Z,h=(0,c.el)((e=>({queryKey:["referrers",e(u)],queryFn:()=>m(void 0,void 0,void 0,(function*(){return(yield p.apiService.getAll({pagination:{per_page:400},params:{isActive:!0}})).data}))})));var g=n(38482);var b=function({value:e,loading:t=!1,isMulti:n=!1,hasNew:c=!0,disabled:d=!1,menuPlacement:m="bottom",onChange:u}){const[p,b]=(0,r.KO)(h),[E,f]=(0,o.useState)(!1);return o.createElement(o.Fragment,null,o.createElement(s.ZP,{isClearable:!0,isMulti:n,options:null!=p?p:[],isLoading:!(p&&!t)||void 0,isDisabled:d,onChange:e=>null==u?void 0:u(e),menuPlacement:m,getOptionLabel:e=>{var t;return`${null==e?void 0:e.id} ${null!==(t=null==e?void 0:e.title)&&void 0!==t?t:""}`},getOptionValue:e=>String(null==e?void 0:e.id),theme:e=>(0,i.$p)(e),components:{Menu:e=>(0,a.S)({hasNew:c,props:e,onClick:()=>f(!0)}),IndicatorSeparator:()=>o.createElement("span",{style:{width:0}})},classNamePrefix:"react-select",value:e}),o.createElement(l.Z,{isVisible:E,setVisible:f,title:"Referrer.Title"},o.createElement(g.default,{onCallback:()=>{b({type:"refetch"})}})))}},92416:function(e){e.exports=JSON.parse('{"AW":"/Chants/Chant/*"}')},54370:function(e){e.exports=JSON.parse('{"AW":"/Chants/Audio/*"}')}}]);