"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9862],{9862:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});n(34570);var r=n(33996),l=n(61985),a=(n(95171),n(6110)),i=n(27378),o=n(56552),c=n(21244),u=n(99386),m=n(2010),s=n(3288),d=n(35062),p=n(10374),E=n(97851),f=n(25724),Z=n(72961),g=n(56591),v=n(2133),y=n(60071),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};function O({onSubmit:e,isPending:t,initialValues:n}){const{t:a}=(0,y.$)(),[o]=s.Z.useForm(),{role:O}=(0,i.useContext)(l.Vo),P="partner"===O;return(0,i.useEffect)((()=>{n&&o.setFieldsValue(n)}),[n]),i.createElement(s.Z,{name:"order-form",form:o,layout:"vertical",onFinish:e},i.createElement(d.Z,{gutter:16},!P&&i.createElement(p.Z,{span:12},i.createElement(s.Z.Item,{name:"partner",label:a("Order.Partner.Field.PartnerId"),rules:[{required:!0}]},i.createElement(m.o,null))),i.createElement(p.Z,{span:P?24:12},i.createElement(s.Z.Item,{name:"customer",label:a("Order.Partner.Field.CustomerId"),rules:[{required:!0}]},i.createElement(m.o,null))),i.createElement(p.Z,{span:24},i.createElement(s.Z.Item,null,i.createElement(s.Z.List,{name:"order_partner_positions"},((e,{add:t,remove:n})=>i.createElement(i.Fragment,null,e.map(((r,l)=>{var{key:o,name:m,fieldKey:y}=r,O=b(r,["key","name","fieldKey"]);return i.createElement(i.Fragment,{key:o},i.createElement(d.Z,{gutter:[16,0],justify:"end",align:"middle"},i.createElement(p.Z,{span:8},i.createElement(s.Z.Item,Object.assign({},O,{required:!0,name:[m,"name"],label:a("Global.Name"),fieldKey:[y,"name"]}),i.createElement(E.Z,null))),i.createElement(p.Z,{span:16},i.createElement(s.Z.Item,Object.assign({},O,{required:!0,name:[m,"description"],label:a("Global.Description"),fieldKey:[y,"description"]}),i.createElement(E.Z,null))),i.createElement(p.Z,{span:8},i.createElement(s.Z.Item,Object.assign({},O,{required:!0,name:[m,"quantity"],label:a("Global.Description"),fieldKey:[y,"description"]}),i.createElement(f.Z,null))),i.createElement(p.Z,{span:3},i.createElement(Z.Z,null,0===l&&i.createElement(g.Z,{ghost:!0,type:"primary",icon:i.createElement(c.Z,null),onClick:()=>t()}),e.length>1&&i.createElement(g.Z,{ghost:!0,danger:!0,type:"primary",icon:i.createElement(u.Z,null),onClick:()=>n(m)})))),i.createElement(v.Z,null))})))))))),i.createElement(r.Ow,{isPending:t}))}var P=n(86089);var _=({onCallback:e,singleData:t})=>{const n=new P.ZP,{profile:c}=(0,i.useContext)(l.Vo),u=!!c.roles.find((e=>"partner"===e.slug));(0,i.useEffect)((()=>{u&&d(c)}),[u]);const{mutate:m,isLoading:s}=(0,o.useMutation)((({id:e,values:t})=>e?n.apiService.updateOne(e,t):n.apiService.createOne(t)));function d(t){var n,r;(null==t?void 0:t.invoice_contact_group_id)||a.ZP.error("Your User doesn't have any contact group!"),m({values:{user_id:null!==(n=null==t?void 0:t.id)&&void 0!==n?n:void 0,invoice_contact_group_id:null!==(r=null==t?void 0:t.invoice_contact_group_id)&&void 0!==r?r:void 0}},{onSuccess:e,onError:e})}return u?i.createElement(r.aN,{title:"Creating New Order Partner..."}):i.createElement(O,{initialValues:t,onSubmit:e=>{d(e.user)},isPending:s})}}}]);