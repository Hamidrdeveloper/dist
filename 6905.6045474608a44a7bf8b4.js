"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6905],{96520:function(e,t,n){var r=n(34234),a=n(39338),l=n(27378),i=n(62500),o=(n(84916),n(35552));t.Z=function({value:e,isMulti:t,onChange:n}){const[d]=(0,a.KO)(o.ci);return l.createElement(i.ZP,{value:e,isMulti:t,options:d,onChange:e=>null==n?void 0:n(e),classNamePrefix:"react-select",getOptionLabel:e=>e.name,getOptionValue:e=>String(e.id),theme:e=>(0,r.$p)(e)})}},18878:function(e,t,n){n.d(t,{WB:function(){return s},a5:function(){return c},lv:function(){return m},d8:function(){return u},iE:function(){return p},EN:function(){return v},vJ:function(){return E},fG:function(){return b},o$:function(){return g},tb:function(){return y},t4:function(){return f},cP:function(){return Z},Qj:function(){return P},NT:function(){return _},QB:function(){return O},Mn:function(){return S}});var r=n(38056),a=n(6110),l=n(14206),i=n.n(l),o=(n(84916),function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))});const d="notice",s=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get(`/${d}`)).data.data}catch(e){throw new Error(e)}})),c=({id:e,notice_template_id:t})=>o(void 0,void 0,void 0,(function*(){try{const n=yield i().put(`/${d}/${e}`,{notice_template_id:t});return a.ZP.success(r.ZP.t("Global.UpdatedSuccessfully",{title:r.ZP.t("Email.Field.Automatics")})),n.data.data}catch(e){throw new Error(e)}})),m=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/email-authorization")).data.data}catch(e){throw new Error(e)}})),u=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("/settings",e);return a.ZP.success(r.ZP.t("Global.UpdatedSuccessfully",{title:r.ZP.t("Email.Field.LoginDetail")})),t.data.data}catch(e){throw new Error(e)}})),p=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/newsletter-authorization")).data.data}catch(e){throw new Error(e)}})),v=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("/settings",e);return a.ZP.success(r.ZP.t("Global.UpdatedSuccessfully",{title:r.ZP.t("Email.Field.NewsLetter")})),t.data.data}catch(e){throw new Error(e)}})),E=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/bcc-setting")).data.data}catch(e){throw new Error(e)}})),b=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("settings",e);return a.ZP.success(r.ZP.t("Global.UpdatedSuccessfully",{title:r.ZP.t("Email.Field.InfoService")})),t.data.data}catch(e){throw new Error(e)}})),g=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/settings/mail-signatures")).data.data[0]}catch(e){throw new Error(e)}})),y=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post("/settings",e);return a.ZP.success(r.ZP.t("Global.UpdatedSuccessfully",{title:r.ZP.t("Email.Field.Signature")})),t.data.data}catch(e){throw new Error(e)}})),h="/notice-template",f=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().get(`${h}`,{params:e});return t.data.data.map((e=>Object.assign(Object.assign({},e),{data:e.data})))}catch(e){throw new Error(e)}})),Z=e=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get(`${h}/${e}`)).data}catch(e){throw new Error(e)}})),P=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/document-types",{params:{per_page:100}})).data.data}catch(e){throw new Error(e)}})),_=()=>o(void 0,void 0,void 0,(function*(){try{return(yield i().get("/templates/variables")).data.data}catch(e){throw new Error(e)}})),O=(e,t)=>o(void 0,void 0,void 0,(function*(){try{const n=yield i().put(`${h}/${e}`,t);return a.ZP.success(r.ZP.t("Global.UpdatedSuccessfully",{title:r.ZP.t("Email.Field.Template")})),n.data.data}catch(e){throw new Error(e)}})),S=e=>o(void 0,void 0,void 0,(function*(){try{const t=yield i().post(`${h}`,e);return a.ZP.success(r.ZP.t("Global.CreatedSuccessfully",{title:r.ZP.t("Email.Field.Template")})),t.data.data}catch(e){throw new Error(e)}}))},35552:function(e,t,n){n.d(t,{ci:function(){return d},R2:function(){return c},ji:function(){return u}});var r=n(39338),a=n(59748),l=(n(84916),n(18878)),i=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const o=(0,r.cn)([]),d=(0,a.el)((e=>({queryKey:["documentTypes",e(o)],queryFn:()=>i(void 0,void 0,void 0,(function*(){return yield(0,l.Qj)()}))}))),s=(0,r.cn)([]),c=(0,a.el)((e=>({queryKey:["variables",e(s)],queryFn:()=>i(void 0,void 0,void 0,(function*(){return yield(0,l.NT)()}))}))),m=(0,r.cn)([]),u=(0,a.el)((e=>({queryKey:["templates",e(m)],queryFn:()=>i(void 0,void 0,void 0,(function*(){return yield(0,l.t4)({per_page:100})}))})))},86089:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(38056),a=n(38009),l=(n(95171),n(34234)),i=n(9172),o=n(27378),d=(n(55088),n(50034),n(30433),n(6196)),s=(n(74145),n(73675),n(29439));n(34570);class c{constructor(){this.entity="/order-partners",this.title=[r.ZP.t("Order.Partner.Title"),r.ZP.t("Order.Partner.Title",{count:2})],this.apiService=new l.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${s.O2}`}],this.UpsertComponent=(0,o.lazy)((()=>n.e(9862).then(n.bind(n,9862)))),this.detailColumns=[{key:"id",label:r.ZP.t("Global.ID")},{key:"partner_date",label:r.ZP.t("Order.Field.OrderDate"),render:d.zX},{key:"user",label:r.ZP.t("Order.Field.CustomerName"),render:d.uU},{key:"invoiceContactGroup",label:r.ZP.t("Order.Field.FullAddress"),render:d.WM},{key:"deliveryContactGroup",label:r.ZP.t("Order.Field.DeliveryAddress"),render:d.WM},{key:"payment_status",label:r.ZP.t("Order.Field.PaymentStatus"),render:d.sd}],this.paymentStatusDictionary=[["paid","Paid"],["not_paid","Not Paid"],["partly_paid","Partly Paid"],["over_paid","Over Paid"]],this.tableColumns=[{width:120,key:"OrderDate",className:"number",render:d.JK,dataIndex:"created_at",title:r.ZP.t("Order.Field.OrderDate")},{width:200,key:"CustomerName",title:r.ZP.t("Order.Field.CustomerName"),dataIndex:["customer","person","full_name"]},{key:"TotalPayment",dataIndex:"total_gross_amount",className:"number",width:100,title:r.ZP.t("Order.Field.TotalPayment"),render:(e,t)=>(0,d.bD)({total_price:e,data:t})},{key:"PaymentStatus",dataIndex:"payment_status",width:140,title:r.ZP.t("Order.Field.PaymentStatus"),render:(e,t)=>o.createElement(i.Z,{defaultValue:e,style:{width:120},onChange:e=>(0,a.wb)(t.id,e),options:this.paymentStatusDictionary.map((e=>({value:e[0],label:e[1]})))})}]}}},68326:function(e,t,n){n.d(t,{ZP:function(){return d}});var r=n(38056),a=(n(95171),n(34234)),l=n(27378),i=(n(56762),n(6196)),o=(n(73675),n(29439));n(34570);class d{constructor(){this.entity="/order/purchases",this.title=[r.ZP.t("Order.Purchase_Title"),r.ZP.t("Order.Purchase_Title",{count:2})],this.apiService=new a.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${o.mx}`}],this.UpsertComponent=(0,l.lazy)((()=>n.e(7807).then(n.bind(n,7807)))),this.detailColumns=[{key:"id",label:r.ZP.t("Global.ID")},{key:"orderStatus",label:r.ZP.t("Order.Field.OrderStatus"),render:i.D9},{key:"supplier",label:r.ZP.t("Order.Field.SupplierName"),render:i.nc},{key:"invoiceContactGroup",label:r.ZP.t("Order.Field.FullAddress"),render:i.WM},{key:"deliveryContactGroup",label:r.ZP.t("Order.Field.DeliveryAddress"),render:i.WM},{key:"paymentMethod",label:r.ZP.t("Order.Field.PaymentMethod"),render:i.Sh},{key:"payment_status",label:r.ZP.t("Order.Field.PaymentStatus"),render:i.sd},{key:"storageVariation",label:r.ZP.t("Order.Field.StorageVariation"),render:i.SF},{key:"shippingProfile",label:r.ZP.t("Order.Field.ShippingProfile"),render:i.C9}],this.tableColumns=[{width:120,key:"OrderDate",className:"number",render:i.JK,dataIndex:"order_date",title:r.ZP.t("Order.Field.OrderDate")},{key:"SupplierName",dataIndex:"customer_full_name",width:200,title:r.ZP.t("Order.Field.SupplierName")},{key:"PaymentMethod",dataIndex:"paymentMethod",width:200,title:r.ZP.t("Order.Field.PaymentMethod"),render:e=>(0,i.t8)({payment_method:e})},{key:"ShippingProfile",dataIndex:"shippingProfile",width:200,title:r.ZP.t("Order.Field.ShippingProfile"),render:e=>(0,i.rW)({shipping_profile:e})},{key:"TotalPayment",dataIndex:"total_gross_amount",className:"number",width:100,title:r.ZP.t("Order.Field.TotalPayment"),render:(e,t)=>(0,i.$H)({total_price:e,data:t})},{key:"Paid",dataIndex:"total_payment",className:"number",width:100,title:r.ZP.t("Order.Field.Paid"),render:(e,t)=>(0,i.Zp)({payment:e,data:t})},{key:"PaymentStatus",dataIndex:"payment_status",width:140,title:r.ZP.t("Order.Field.PaymentStatus"),render:e=>(0,i.q)({payment_status:e})},{key:"OrderStatus",dataIndex:"orderStatus",width:120,title:r.ZP.t("Order.Field.OrderStatus"),render:e=>(0,i.cH)({orderStatus:e})},{key:"id",dataIndex:["flags"],width:120,title:r.ZP.t("Order.OrderFlag"),align:"center",render:(e,t)=>(0,i.iL)(e,"purchase",t)},{width:200,className:"number",key:"EstimatedDeliveryDate",dataIndex:"estimate_delivery_date",title:r.ZP.t("Order.Field.EstimatedDeliveryDate"),render:e=>(0,i.by)({date:e})}]}}},55441:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(38056),a=(n(95171),n(34234)),l=n(27378),i=(n(56762),n(2010),n(6196)),o=n(29439);n(34570);class d{constructor(){this.entity="/order-subscriptions",this.title=[r.ZP.t("Order.Subscription.Title"),r.ZP.t("Order.Subscription.Title",{count:2})],this.apiService=new a.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${o.Wp}`}],this.UpsertComponent=(0,l.lazy)((()=>n.e(2750).then(n.bind(n,82750)))),this.detailColumns=[{key:"id",label:r.ZP.t("Global.ID")},{key:"owner_id",label:r.ZP.t("Order.Field.OwnerId")},{key:"number",label:r.ZP.t("Global.Number")},{key:"payment_status",label:r.ZP.t("Order.Field.PaymentStatus")},{key:"total_gross_amount",label:r.ZP.t("Order.Field.TotalGrossAmount")},{key:"total_net_amount",label:r.ZP.t("Order.Field.TotalNetAmount")},{key:"total_vat_amount",label:r.ZP.t("Order.Field.TotalVatAmount")},{key:"gross_shipping_cost",label:r.ZP.t("Order.Field.GrossShippingCost")},{key:"return_on_sale",label:r.ZP.t("Order.Field.ReturnOnSale")},{key:"is_editable",label:r.ZP.t("Order.Field.IsEditable")},{key:"early_payment_discount",label:r.ZP.t("Order.Field.EarlyPaymentDiscount")}],this.tableColumns=[{width:120,key:"OrderDate",className:"number",render:i.JK,dataIndex:"order_date",title:r.ZP.t("Order.Field.OrderDate")},{key:"CustomerName",title:r.ZP.t("Order.Field.CustomerName"),dataIndex:"user",width:200,render:e=>(0,i.qk)({user:e})},{key:"PaymentMethod",title:r.ZP.t("Order.Field.PaymentMethod"),dataIndex:"paymentMethod",width:200,render:e=>(0,i.t8)({payment_method:e})},{key:"ShippingProfile",title:r.ZP.t("Order.Field.ShippingProfile"),dataIndex:"shippingProfile",width:200,render:e=>(0,i.rW)({shipping_profile:e})},{key:"TotalPayment",title:r.ZP.t("Order.Field.TotalPayment"),dataIndex:"total_price",className:"number",width:100,render:(e,t)=>(0,i.Uu)({total_price:e,data:t})},{key:"OrderStatus",title:r.ZP.t("Order.Field.OrderStatus"),dataIndex:"orderStatus",width:120,render:e=>(0,i.cH)({orderStatus:e})},{key:"id",dataIndex:["flags"],width:120,title:r.ZP.t("Order.OrderFlag"),align:"center",render:(e,t)=>(0,i.iL)(e,"subscription",t)},{width:200,className:"number",key:"EstimatedDeliveryDate",dataIndex:"next_order_sale_date",title:r.ZP.t("Order.Field.EstimatedDeliveryDate"),render:e=>(0,i.by)({date:e})}]}}},36905:function(e,t,n){n.r(t),n.d(t,{default:function(){return ja}});var r=n(27378),a=n(96740),l=n(33996),i=n(38056),o=(n(95171),n(34234)),d=(n(56762),n(2010),n(6196)),s=n(29439),c=n(34570);class m{constructor(){this.entity="/order-credit-notes",this.title=[i.ZP.t("Order.Credit.Title"),i.ZP.t("Order.Credit.Title",{count:2})],this.apiService=new o.Vx(this.entity,this.title[0]),this.breadcrumbItems=[{breadcrumbName:this.title[1],path:`/admin${s._z}`}],this.detailColumns=[{key:"id",label:i.ZP.t("Global.ID")},{key:"orderStatus",label:i.ZP.t("Order.Field.OrderStatus"),render:d.D9},{key:"order_date",label:i.ZP.t("Order.Field.OrderDate"),render:d.zX},{key:["order","user"],label:i.ZP.t("Order.Field.CustomerName"),render:d.uU},{key:["order","invoiceContactGroup"],label:i.ZP.t("Order.Field.FullAddress"),render:d.WM},{key:["order","deliveryContactGroup"],label:i.ZP.t("Order.Field.DeliveryAddress"),render:d.WM},{key:"paymentMethod",label:i.ZP.t("Order.Field.PaymentMethod"),render:d.Sh},{key:"payment_status",label:i.ZP.t("Order.Field.PaymentStatus"),render:d.sd},{key:["order","shippingProfile"],label:i.ZP.t("Order.Field.ShippingProfile"),render:d.C9}],this.tableColumns=[{width:120,key:"OrderDate",className:"number",render:d.JK,dataIndex:"order_date",title:i.ZP.t("Order.Field.OrderDate")},{key:"CustomerName",title:i.ZP.t("Order.Field.CustomerName"),dataIndex:["order","user"],width:200,render:e=>(0,d.qk)({user:e})},{key:"PaymentMethod",title:i.ZP.t("Order.Field.PaymentMethod"),dataIndex:"paymentMethod",width:200,render:e=>(0,d.t8)({payment_method:e})},{key:"ShippingProfile",title:i.ZP.t("Order.Field.ShippingProfile"),dataIndex:["order","shippingProfile"],width:200,render:e=>(0,d.rW)({shipping_profile:e})},{key:"TotalPayment",title:i.ZP.t("Order.Field.TotalPayment"),dataIndex:"total_gross_amount",className:"number",width:100,render:(e,t)=>(0,d.z3)({total_price:e,data:t})},{key:"Paid",title:i.ZP.t("Order.Field.Paid"),dataIndex:"total_payment",className:"number",width:100,render:(e,t)=>(0,d.y)({total_payment:e,data:t})},{key:"PaymentStatus",title:i.ZP.t("Order.Field.PaymentStatus"),dataIndex:"payment_status",width:140,render:e=>(0,d.q)({payment_status:e})},{key:"OrderStatus",title:i.ZP.t("Order.Field.OrderStatus"),dataIndex:"orderStatus",width:120,render:e=>(0,d.cH)({orderStatus:e})},{key:"id",dataIndex:["flags"],width:120,title:i.ZP.t("Order.OrderFlag"),align:"center",render:(e,t)=>(0,d.iL)(e,"credit",t)},{width:200,className:"number",key:"EstimatedDeliveryDate",dataIndex:["order","estimate_delivery_date"],title:i.ZP.t("Order.Field.EstimatedDeliveryDate"),render:e=>(0,d.by)({date:e})}]}}function u(){const e=new m;return r.createElement(l.Xg,{module:e},r.createElement(l.Xg.Breadcrumb,null),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasSearch:!0,noListView:!0}),r.createElement(l.s_.ListView,{module:e,updateLink:e.breadcrumbItems[0].path,tableScroll:{x:1450,y:750},params:{orderBy:{id:"DESC"}}})))}var p=n(61985),v=n(50836),E=n(60071),b=n(26761),g=n(31675),y=n(28246),h=n(31602),f=n(98809),Z=n(66025),P=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))},_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const O=e=>P(void 0,void 0,void 0,(function*(){return yield(0,Z.$h)(e)})),S=e=>{var t,n,r,a,l,i,o,{orderCreditNotePositions:d,total_payment:s,total_net_amount:c,total_vat_amount:m,total_gross_amount:u,order:p}=e,v=_(e,["orderCreditNotePositions","total_payment","total_net_amount","total_vat_amount","total_gross_amount","order"]);const E=null!==(n=null===(t=p.currency)||void 0===t?void 0:t.iso3)&&void 0!==n?n:"EUR",b=d.map((e=>e.orderPosition.productVariation?e.quantity:0)).reduce(((e,t)=>e+t),0),g=null!==(r=null==p?void 0:p.total_weight_gross)&&void 0!==r?r:0;return{amountPaid:null!=s?s:0,grossValueOfItems:null!=u?u:0,iso3:E,itemQuantity:b,netValueOfItems:null!=c?c:0,returnOnSale:null!==(a=p.return_on_sale)&&void 0!==a?a:0,shippingCosts:p.gross_shipping_cost,totalQv:null!==(l=v.total_qv)&&void 0!==l?l:0,totalProvisionPrice:null!==(i=v.total_provision_price)&&void 0!==i?i:0,totalProvisionPriceDiscount:null!==(o=v.total_provision_price_discount)&&void 0!==o?o:0,totalPrice:null!=u?u:0,weight:g,wholeVat:null!=m?m:0}},w=({orderCreditNotePositions:e,pay_date:t,orderStatus:n,language:r,paymentMethod:a,order:l})=>{var i,o,d,s,c,m;if(!l)return null;const u=l.country,p=l.estimate_delivery_date?new Date(l.estimate_delivery_date):null,v=l.shipped_on?new Date(l.shipped_on):null,E=l.currency,b=null!==(o=null===(i=null==e?void 0:e.find((e=>{var t;return 6===(null===(t=e.orderPosition.orderPositionType)||void 0===t?void 0:t.id)})))||void 0===i?void 0:i.price_value)&&void 0!==o?o:0;return{country:u,estimatedShippingDate:p,currency:E,shippingCostValue:b,termOfPayment:{earlyPaymentDiscount:String(null!==(d=l.early_payment_discount_days)&&void 0!==d?d:"-"),earlyPaymentDiscountPercent:String(null!==(s=l.early_payment_discount_percentage)&&void 0!==s?s:"-"),paymentDue:String(null!==(m=null===(c=l.paymentTerm)||void 0===c?void 0:c.due_days)&&void 0!==m?m:"-"),valueDate:t?new Date(t):null},selects:{orderStatus:n,language:r,paymentMethod:a,shippingProfile:l.shippingProfile},shippedOn:v}},N=({paymentMethod:e,order:t})=>{var n,r,a;if(!t)return null;const l=t.user,{person:i,roles:o}=l,d=_(l,["person","roles"]),s=null==o?void 0:o.map((e=>e.title));return{email:d.email,username:d.username,gender:null==i?void 0:i.gender,lastName:null==i?void 0:i.last_name,firstName:null==i?void 0:i.first_name,companyName:null==i?void 0:i.company_name,taxNumber:d.tax_number,vatNumber:d.vat_number,eoriNumber:d.eori_number,country:null===(n=d.country)||void 0===n?void 0:n.name,language:null===(r=d.language)||void 0===r?void 0:r.title,paymentMethod:null==e?void 0:e.name,creditLimit:d.credit_limit,shippingMethod:null===(a=d.shippingMethod)||void 0===a?void 0:a.name,paymentTerm:d.paymentTerm,roles:s,userDiscount:d.discount_ratio}},x=({orderCreditNotePositions:e,order:t})=>{const n=null==e?void 0:e.filter((e=>e.orderPosition.productVariation)),r=null==n?void 0:n.map((({id:e,orderPosition:{discount:n,productVariation:r,estimate_delivery_date:a,return_on_sale:l,updated_at:i,created_at:o,vat:{number:d,valid_from:s}},orderPositionMlmDetail:c,quantity:m,vat_id:u,single_gross_amount:p,price_value:v,vat_value:E,vat_amount:b,gross_amount:g,net_amount:y,weight_gross:h})=>{var f,Z,P,_,O,S,w;return{createdAt:o,discount:n,grossPrice:g,netPrice:y,singleGrossPrice:p,singleNetPrice:v,orderId:e,vat:{id:u,value:E,amount:b,number:d,valid_from:s},careerStepDiscount:null==c?void 0:c.career_step_discount,percentageOfProvision:null==c?void 0:c.percentage_of_provision,provisionPrice:null==c?void 0:c.provision_price,iso3:null!==(Z=null===(f=t.currency)||void 0===f?void 0:f.iso3)&&void 0!==Z?Z:"EUR",productId:null===(P=r.product)||void 0===P?void 0:P.id,productVariation:{id:r.id,name:r.name,number:null!==(_=r.number)&&void 0!==_?_:String(null!==(O=r.id)&&void 0!==O?O:-1),availableUntil:r.available_until?new Date(r.available_until):null,deliveryDate:a?new Date(a):null,shippingName:null!==(w=null===(S=t.shippingProfile)||void 0===S?void 0:S.name)&&void 0!==w?w:" - "},quantity:m,returnOnSale:l,updatedAt:i?new Date(i):null,weight:Number(null!=h?h:0)}}));return r},k=e=>P(void 0,void 0,void 0,(function*(){const t=yield(0,Z.p3)(e);return{documents:t.documents.map(((e,t)=>{var n,r;return{id:t+1,name:null!==(r=null===(n=e.documentType)||void 0===n?void 0:n.name)&&void 0!==r?r:" - ",createDate:e.created_at?new Date(e.created_at):null,fileURL:e.link,number:e.number}})),options:{correctionUrl:t.correction_document_link,creditNoteUrl:t.credit_note_document_link,orderSaleId:e}}})),T=(e,t,n)=>P(void 0,void 0,void 0,(function*(){return"credit_note"===e?yield(0,Z.jl)(t,n):"credit_note_cancellation"===e?yield(0,Z.vQ)(t,n):"correction_document"===e?yield(0,Z.Qv)(t,n):"correction_document_cancellation"===e?yield(0,Z.aT)(t,n):"Error"}));var C=n(99885),I=n(84325),D=n(65483),V=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))},F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const G=e=>V(void 0,void 0,void 0,(function*(){return yield(0,I.o$)(e)})),A=e=>{var t,n,r,a,l,i,o,d;const s=null===(t=e.invoiceContactGroup)||void 0===t?void 0:t.country,c=e.estimate_delivery_date?new Date(e.estimate_delivery_date):null,m=e.shipped_on?new Date(e.shipped_on):null,u=e.currency,p=null!==(a=null===(r=null===(n=e.orderPurchasePositions)||void 0===n?void 0:n.find((e=>{var t;return 6===(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})))||void 0===r?void 0:r.price_value)&&void 0!==a?a:0;return{country:s,estimatedShippingDate:c,currency:u,shippingCostValue:p,termOfPayment:{earlyPaymentDiscount:String(null!==(l=e.early_payment_discount_days)&&void 0!==l?l:"-"),earlyPaymentDiscountPercent:String(null!==(i=e.early_payment_discount_percentage)&&void 0!==i?i:"-"),paymentDue:String(null!==(d=null===(o=e.paymentTerm)||void 0===o?void 0:o.due_days)&&void 0!==d?d:"-"),valueDate:e.pay_date?new Date(e.pay_date):null},selects:{orderStatus:e.orderStatus,language:e.language,paymentMethod:e.paymentMethod,shippingProfile:e.shippingProfile},shippedOn:m}},L=e=>{var t,n,r,a,l,i,o,d,s,c,m,u,p,v,E,b;if(!e||!e.supplier)return null;const g=e.supplier,{people:y}=g,h=F(g,["people"]);return{email:null===(t=null==y?void 0:y.user)||void 0===t?void 0:t.email,username:null===(n=null==y?void 0:y.user)||void 0===n?void 0:n.username,gender:null==y?void 0:y.gender,lastName:null==y?void 0:y.last_name,firstName:null==y?void 0:y.first_name,companyName:null==y?void 0:y.company_name,taxNumber:h.tax_number,vatNumber:h.vat_number,eoriNumber:h.eori_number,country:null!==(d=null!==(l=null===(a=null===(r=null==y?void 0:y.user)||void 0===r?void 0:r.country)||void 0===a?void 0:a.name)&&void 0!==l?l:null===(o=null===(i=e.invoiceContactGroup)||void 0===i?void 0:i.country)||void 0===o?void 0:o.name)&&void 0!==d?d:" - ",language:null!==(p=null!==(m=null===(c=null===(s=null==y?void 0:y.user)||void 0===s?void 0:s.language)||void 0===c?void 0:c.title)&&void 0!==m?m:null===(u=e.language)||void 0===u?void 0:u.title)&&void 0!==p?p:" - ",paymentMethod:null===(v=e.paymentMethod)||void 0===v?void 0:v.name,creditLimit:h.credit_limit,shippingMethod:null===(E=h.shippingMethod)||void 0===E?void 0:E.name,paymentTerm:h.paymentTerm,roles:["Supplier"],userDiscount:null===(b=null==y?void 0:y.user)||void 0===b?void 0:b.discount_ratio}},R=e=>{var t;const n=null===(t=e.orderPurchasePositions)||void 0===t?void 0:t.filter((e=>e.productVariation));return null==n?void 0:n.map((({discount:t,id:n,parent_id:r,data_current:a,productVariation:l,estimate_delivery_date:i,delivered_quantity:o,quantity:d,return_on_sale:s,updated_at:c,created_at:m,price_value:u,storageVariation:p,single_gross_amount:v,gross_amount:E,net_amount:b,orderPositionType:g,vat:y,weight_gross:h})=>{var f,Z,P,_,O,S,w,N;return{createdAt:m,discount:t,grossPrice:E,netPrice:b,singleGrossPrice:v,singleNetPrice:u,orderId:n,storageVariation:p,vat:y,parentId:r,estimatedDeliveryDate:i?new Date(i):null,iso3:null!==(Z=null===(f=e.currency)||void 0===f?void 0:f.iso3)&&void 0!==Z?Z:"EUR",productId:null===(P=l.product)||void 0===P?void 0:P.id,productVariation:{id:l.id,name:null!==(_=null==a?void 0:a.name)&&void 0!==_?_:l.name,number:null!==(O=l.number)&&void 0!==O?O:String(null!==(S=l.id)&&void 0!==S?S:-1),availableUntil:l.available_until?new Date(l.available_until):null,deliveryDate:i?new Date(i):null,shippingName:null!==(N=null===(w=e.shippingProfile)||void 0===w?void 0:w.name)&&void 0!==N?N:" - "},quantity:d,deliveredQuantity:o,returnOnSale:s,updatedAt:c?new Date(c):null,weight:Number(null!=h?h:0),orderPositionType:g}}))},j=e=>V(void 0,void 0,void 0,(function*(){const t=yield(0,I.S_)(e);return{documents:t.documents.map((e=>{var t,n;return{id:e.id,name:null!==(n=null===(t=e.documentType)||void 0===t?void 0:t.name)&&void 0!==n?n:" - ",createDate:e.created_at?new Date(e.created_at):null,fileURL:e.link,number:e.number}})),options:{invoiceId:t.invoice_id,orderSaleId:e}}})),$=(e,t,n)=>V(void 0,void 0,void 0,(function*(){return"generatePurchase"===e?yield(0,I.n4)(t,n):"Error"}));var q=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))},U=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const M=e=>q(void 0,void 0,void 0,(function*(){return yield(0,D.T7)(e)})),K=e=>{var t,n,r,a,l,i,o,d,s;const c=null===(t=e.invoiceContactGroup)||void 0===t?void 0:t.country,m=e.estimate_delivery_date?new Date(e.estimate_delivery_date):null,u=e.shipped_on?new Date(e.shipped_on):null,p=e.currency,v=null!==(a=null===(r=null===(n=e.positions)||void 0===n?void 0:n.find((e=>{var t;return 6===(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})))||void 0===r?void 0:r.price_value)&&void 0!==a?a:0;return{country:c,shippedOn:u,estimatedShippingDate:m,currency:p,shippingCostValue:v,termOfPayment:{earlyPaymentDiscount:String(null!==(l=e.early_payment_discount_days)&&void 0!==l?l:"-"),earlyPaymentDiscountPercent:String(null!==(o=null===(i=null==e?void 0:e.paymentTerm)||void 0===i?void 0:i.discount_percentage)&&void 0!==o?o:"-"),paymentDue:String(null!==(s=null===(d=e.paymentTerm)||void 0===d?void 0:d.due_days)&&void 0!==s?s:"-"),valueDate:e.pay_date?new Date(e.pay_date):null},selects:{orderStatus:e.orderStatus,language:e.language,paymentMethod:e.paymentMethod,shippingProfile:e.shippingProfile},timePeriod:e.time_period}},z=e=>{var t,n,r,a,l;if(!e||!e.user)return null;const i=e.user,{person:o,roles:d}=i,s=U(i,["person","roles"]),c=null==d?void 0:d.map((e=>e.title));return{email:s.email,username:s.username,gender:null==o?void 0:o.gender,lastName:null==o?void 0:o.last_name,firstName:null==o?void 0:o.first_name,companyName:null==o?void 0:o.company_name,taxNumber:s.tax_number,vatNumber:s.vat_number,eoriNumber:s.eori_number,country:null===(t=s.country)||void 0===t?void 0:t.name,language:null===(n=s.language)||void 0===n?void 0:n.title,paymentMethod:null!==(a=null===(r=e.paymentMethod)||void 0===r?void 0:r.name)&&void 0!==a?a:" - ",creditLimit:s.credit_limit,shippingMethod:null===(l=s.shippingMethod)||void 0===l?void 0:l.name,paymentTerm:s.paymentTerm,roles:c,userDiscount:s.discount_ratio}},W=e=>{var t;const n=null===(t=e.positions)||void 0===t?void 0:t.filter((e=>e.productVariation));return null==n?void 0:n.map((({discount:t,id:n,data_current:r,parent_id:a,productVariation:l,estimate_delivery_date:i,quantity:o,return_on_sale:d,updated_at:s,created_at:c,gross_amount:m,storageVariation:u,net_amount:p,price_value:v,single_gross_amount:E,orderPositionType:b,orderPositionMlmDetail:g,vat:y})=>{var h,f,Z,P,_,O,S,w,N;return{createdAt:c,discount:t,grossPrice:m,netPrice:p,singleGrossPrice:E,singleNetPrice:v,orderId:n,storageVariation:u,vat:y,careerStepDiscount:null==g?void 0:g.career_step_discount,percentageOfProvision:null==g?void 0:g.percentage_of_provision,provisionPrice:null==g?void 0:g.provision_price,parentId:a,estimatedDeliveryDate:i?new Date(i):null,iso3:null!==(f=null===(h=e.currency)||void 0===h?void 0:h.iso3)&&void 0!==f?f:"EUR",productId:null===(Z=l.product)||void 0===Z?void 0:Z.id,productVariation:{id:l.id,name:null!==(P=null==r?void 0:r.name)&&void 0!==P?P:l.name,number:null!==(_=l.number)&&void 0!==_?_:String(null!==(O=l.id)&&void 0!==O?O:-1),availableUntil:l.available_until?new Date(l.available_until):null,deliveryDate:i?new Date(i):null,shippingName:null!==(w=null===(S=e.shippingProfile)||void 0===S?void 0:S.name)&&void 0!==w?w:" - "},quantity:o,returnOnSale:d,updatedAt:s?new Date(s):null,weight:Number(null!==(N=l.weight)&&void 0!==N?N:0)*o,orderPositionType:b}}))},B=e=>q(void 0,void 0,void 0,(function*(){const t=yield(0,D.Zu)(e);return{documents:t.documents.map((e=>{var t,n;return{id:e.id,name:null!==(n=null===(t=e.documentType)||void 0===t?void 0:t.name)&&void 0!==n?n:" - ",createDate:e.created_at?new Date(e.created_at):null,fileURL:e.link,number:e.number}})),options:{invoiceId:t.invoice_id,orderSaleId:e}}})),{Item:X}=y.Z;var Q=({orderSale:e,moduleType:t})=>{var n,a,i,o,d,s,c,m,u,p,v,b;const{t:f}=(0,E.$)(),[Z,P]=(0,r.useState)();if((0,r.useEffect)((()=>{e&&P({credit:N(e),"order-sale":(0,C.VM)(e),subscription:z(e),purchase:L(e)}[t])}),[e]),!Z||!e)return r.createElement(l.aN,{title:f("Order.Customer.Loader")});const{email:_,username:O,gender:S,lastName:w,firstName:x,companyName:k,taxNumber:T,vatNumber:I,eoriNumber:D,country:V,language:F,paymentMethod:G,creditLimit:A,shippingMethod:R,paymentTerm:j,userDiscount:$}=Z;return r.createElement(y.Z,{title:f("Order.Customer.CustomerInfo"),bordered:!0,column:2},(null===(n=null==e?void 0:e.user)||void 0===n?void 0:n.person)?r.createElement(X,{label:f("Global.FirstName")},r.createElement(h.rU,{to:(0,g.kh)(null===(a=null==e?void 0:e.user)||void 0===a?void 0:a.id,null!==(null===(i=null==e?void 0:e.user)||void 0===i?void 0:i.partner)?"partner":"user")},x)):r.createElement(X,{label:f("Global.FirstName")},x),(null===(o=null==e?void 0:e.user)||void 0===o?void 0:o.person)?r.createElement(X,{label:f("Global.LastName")},r.createElement(h.rU,{to:(0,g.kh)(null===(d=null==e?void 0:e.user)||void 0===d?void 0:d.id,null!==(null===(s=null==e?void 0:e.user)||void 0===s?void 0:s.partner)?"partner":"user")},w)):r.createElement(X,{label:f("Global.FirstName")},w),r.createElement(X,{label:f("Global.Gender")},S),r.createElement(X,{label:f("Global.Username")},O),k&&r.createElement(X,{label:f("Order.Customer.CompanyName")},k),_&&r.createElement(X,{label:f("Global.Email")},_),j&&r.createElement(X,{label:f("PaymentTerm.Title")},j.description&&r.createElement(r.Fragment,null,f("PaymentTerm.Field.Description")," : ",j.description),r.createElement("br",null),j.due_days&&r.createElement(r.Fragment,null,f("PaymentTerm.Field.DueDays")," : ",j.due_days),r.createElement("br",null),j.discount_percentage&&r.createElement(r.Fragment,null,f("PaymentTerm.Field.DiscountPercentage")," : ",j.discount_percentage)),r.createElement(X,{label:f("Country.Title")},V),r.createElement(X,{label:f("User.Field.TaxNumber")},T),I&&r.createElement(X,{label:f("User.Field.VatNumber")},I),r.createElement(X,{label:f("User.Field.EoriNumber")},D),r.createElement(X,{label:f("Language.Title")},F),r.createElement(X,{label:f("PaymentMethod.Title")},G),r.createElement(X,{label:f("User.Field.CreditLimit")},A),r.createElement(X,{label:f("User.Field.DefaultShippingMethod")},R),r.createElement(X,{label:f("User.Field.UserDiscount")},$),(null===(c=null==e?void 0:e.user)||void 0===c?void 0:c.sponsor)&&r.createElement(X,{label:f("Order.Field.Sponsor")},r.createElement(h.rU,{to:`/admin/users/manage/partner/${null===(p=null===(u=null===(m=null==e?void 0:e.user)||void 0===m?void 0:m.sponsor)||void 0===u?void 0:u.user_id)||void 0===p?void 0:p.toString()}?active=7`},null===(b=null===(v=null==e?void 0:e.user)||void 0===v?void 0:v.sponsor)||void 0===b?void 0:b.fullname)))},H=n(21244),Y=n(81769),J=n(35062),ee=n(10374),te=n(72961),ne=n(26490),re=n(56591),ae=n(42027),le=n(21792),ie=n(46927),oe=n(53988),de=n(14939),se=n(3970),ce=n(3288),me=n(97851),ue=n(2133),pe=n(48158),ve=n(25724);var Ee=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,E.$)();return r.createElement(ce.Z,{name:"order-delivery-form",layout:"vertical",onFinish:e,initialValues:n},r.createElement(r.Suspense,{fallback:r.createElement(l.aN,null)},r.createElement(J.Z,{gutter:16},r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:["package"],label:a("Order.Delivery.Package"),rules:[{required:!0}]},r.createElement(se.R,null))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:["number"],label:a("Order.Delivery.TrackingCode")},r.createElement(me.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Order.Delivery.TrackingCode")})}))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:["description"],label:a("Global.Description")},r.createElement(me.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Global.Description")})}))),r.createElement(ue.Z,null),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.List,{name:"items"},(e=>r.createElement(J.Z,{gutter:32},e.map((({key:e,name:t,fieldKey:l},i)=>{var o,d;return r.createElement(ee.Z,{key:e,span:24},2!==(null==n?void 0:n.items[i].order_position_type_id)?r.createElement(J.Z,{gutter:8},r.createElement(ce.Z.Item,{name:[t,"order_position_id"],fieldKey:[l,"order_position_id"],hidden:!0},r.createElement(me.Z,null)),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:[t,"isActive"],fieldKey:[l,"isActive"],label:" ",valuePropName:"checked"},r.createElement(pe.Z,null,null!==(o=null==n?void 0:n.items[i].name)&&void 0!==o?o:" - "))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:[t,"quantity"],fieldKey:[l,"quantity"],rules:[{required:!0}],label:a("Order.Field.Quantity")},r.createElement(ve.Z,{min:0,max:null==n?void 0:n.items[i].quantity})))):r.createElement(r.Fragment,{key:i},r.createElement(J.Z,{gutter:8},null!==(d=null==n?void 0:n.items[i].name)&&void 0!==d?d:" - "," :")))}))))))),r.createElement(l.Ow,{isPending:t})))};var be=({orderSalePositions:e,packages:t,visible:n,pending:a,onSubmit:l,setVisible:i})=>{const{t:o}=(0,E.$)(),d=o("Order.Delivery.Title"),s=()=>{i(!1)},c=n=>{var r,a,l;const i=null!==(a=null===(r=e.find((e=>e.id===n)))||void 0===r?void 0:r.quantity)&&void 0!==a?a:0,o=null!==(l=null==t?void 0:t.flatMap((e=>e.packingJournalItems)).filter((e=>e.order_position_id===n)).reduce(((e,t)=>e+t.quantity),0))&&void 0!==l?l:0;return i-o};return r.createElement(de.Z,{visible:n,width:960,footer:!1,destroyOnClose:!0,closable:!0,onCancel:s,title:r.createElement(oe.Z,{onClose:s,items:[{path:"",breadcrumbName:o("Global.CreateTitle",{title:d})}]})},r.createElement(Ee,{onSubmit:e=>{e.items=e.items.filter((e=>e.quantity>0));const t=Object.assign({},e);l(t)},isPending:a,initialValues:{description:"",package:null,number:void 0,items:(()=>{const t=[];e.filter((e=>null===e.parent_id&&2!==e.order_position_type_id)).map((e=>t.push(e)));return e.filter((e=>2===e.order_position_type_id)).forEach((n=>{t.push(n),e.filter((e=>e.parent_id===n.id)).map((e=>t.push(e)))})),t})().filter((e=>e.productVariation)).map((e=>{var t,n;return{product_variation_id:null===(t=e.productVariation)||void 0===t?void 0:t.id,name:null===(n=e.productVariation)||void 0===n?void 0:n.name,quantity:2!==e.order_position_type_id?c(e.id):0,isActive:!0,order_position_id:e.id,order_position_type_id:e.order_position_type_id,parent_id:e.parent_id}}))}}))};var ge=({orderSaleId:e,orderSalePositions:t,updateTab:n})=>{const{t:a}=(0,E.$)(),[i,o]=(0,r.useState)(!1),[d,s]=(0,r.useState)([]),[c,m]=(0,r.useState)(!1),[u,p]=(0,r.useState)(!1),[v,b]=(0,r.useState)(-1);if(!e)return r.createElement(l.aN,{title:a("Order.Delivery.Loader")});(0,r.useEffect)((()=>{m(!0),(0,ie.F0)(null!=e?e:0).then((e=>{s(e),m(!1)}))}),[]);return r.createElement(ye,null,c?r.createElement(l.aN,{title:a("Order.Delivery.Loader")}):r.createElement("div",{className:"content"},r.createElement(J.Z,{className:"select-container",align:"middle",gutter:[16,16]},r.createElement(ee.Z,{span:24},r.createElement(te.Z,null,r.createElement(ne.Z,null,a("Order.Delivery.Create"),":"),r.createElement(re.Z,{icon:r.createElement(H.Z,null),onClick:()=>{o(!0)}},a("Global.Add")))),r.createElement(ee.Z,{span:24},r.createElement(ae.Z,{dataSource:d,columns:he((e=>{b(e),(0,ie.mV)(e).then((e=>{b(-1),window.open(e)})).catch((()=>b(-1)))}),v),pagination:!1})))),r.createElement(be,{orderSalePositions:t,onSubmit:t=>{p(!0),(0,C.G0)(e,t).then((()=>{p(!1),o(!1),n(le.t.Delivery)})).catch((()=>{p(!1),o(!1)}))},pending:u,visible:i,setVisible:o}))};const ye=b.ZP.div`
  & .content {
    border-radius: 4px;
    box-shadow: 0 0 10px #ebede7;
    padding: 12px;
    & .select-container {
      padding: 5px;
      & .ant-select {
        outline: none;
        margin-left: 3px;
      }
    }
    & .ant-table {
      & th.ant-table-cell {
        color: #fff;
        background: #4a5161;
      }

      & tr {
        &:nth-child(odd) {
          & td.ant-table-cell {
            background: #fbfbfb;
          }
        }

        &:nth-child(even) {
          & td.ant-table-cell {
            background: #f2f2f2;
          }
        }
      }
      & .action-btn {
        color: #4474e7;
      }
    }

    & .action-select {
      min-width: 12vw;
    }
  }
  .table-container {
    width: 100%;
  }
`,he=(e,t)=>[{key:"ID",title:i.ZP.t("Global.ID"),dataIndex:["id"],className:"id number"},{key:"PackingType",title:i.ZP.t("Order.Delivery.PackingType"),dataIndex:["package","packingType","name"]},{dataIndex:["id"],key:"review",title:i.ZP.t("Global.Action"),render:n=>r.createElement(re.Z,{loading:t===n,icon:r.createElement(Y.Z,null),onClick:()=>{e(n)}},i.ZP.t("Global.Review"))}];var fe=n(20096),Ze=n(11450),Pe=n(6110),_e=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const Oe=new o.Vx("/email"),Se=e=>_e(void 0,void 0,void 0,(function*(){try{return yield Oe.request({url:"email/template/preview",method:"POST",body:e})}catch(e){throw new Error(e)}})),we=new o.Vx("/email/log/data");var Ne=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const xe=(e,t,n)=>Ne(void 0,void 0,void 0,(function*(){switch(n){case"order-sale":case"partner":case"credit":default:return yield Se(Object.assign(Object.assign({},t),{order_id:e}));case"subscription":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{return yield Oe.request({url:`order/subscriptions/${e}/email/preview`,method:"POST",body:t})}catch(e){throw new Error(e)}})))(e,t);case"purchase":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{return yield Oe.request({url:`order/purchases/${e}/email/preview`,method:"POST",body:t})}catch(e){throw new Error(e)}})))(e,t)}})),ke=(e,t,n)=>Ne(void 0,void 0,void 0,(function*(){switch(n){case"order-sale":case"credit":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:"email/preview/send/"+t,method:"POST",body:e}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(e,t);case"subscription":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:`order/subscriptions/${t}/email/preview/send`,method:"POST",body:e}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(e,t);case"purchase":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:`order/purchases/${t}/email/preview/send`,method:"POST",body:e}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(e,t)}})),Te=e=>Ne(void 0,void 0,void 0,(function*(){return yield(e=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:"email/log/mail/"+e,method:"POST"}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(e)})),Ce=(e,t,n)=>Ne(void 0,void 0,void 0,(function*(){switch(n){case"order-sale":case"credit":return yield(e=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:"order/email/send",method:"POST",body:e}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(Object.assign(Object.assign({},t),{order_id:e}));case"subscription":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:`order/subscriptions/${e}/email/send`,method:"POST",body:t}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(e,t);case"purchase":return yield((e,t)=>_e(void 0,void 0,void 0,(function*(){try{yield Oe.request({url:`order/purchases/${e}/email/send`,method:"POST",body:t}),Pe.ZP.success(i.ZP.t("Global.MailSendedSuccessfully",{title:i.ZP.t("Order.Title")}))}catch(e){throw new Error(e)}})))(e,t)}}));var Ie=n(61828),De=n(10777);var Ve=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,E.$)();return r.createElement(Fe,null,r.createElement(ce.Z,{name:"order-general-email-form",layout:"vertical",onFinish:e,initialValues:n},r.createElement(J.Z,{gutter:16},r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"customer_email",label:a("Order.Email.Field.CustomerMail")},r.createElement(me.Z,null))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"subject",label:a("Order.Email.Field.Subject")},r.createElement(me.Z,null))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:"body",label:a("Order.Email.Field.Body")},r.createElement(De.default,{className:"multi-line"})))),r.createElement(l.Ow,{isPending:t,title:a("Order.Email.SendEmail")})))};const Fe=b.ZP.div`
  & .multi-line {
    min-height: 180px;
  }
`;var Ge=({module:e,visible:t,initialValues:n,isPending:a,onSubmit:l,setVisible:i})=>{const{t:o}=(0,E.$)(),d=e.title[0],s=()=>i(!1);return r.createElement(de.Z,{visible:t,width:1300,footer:!1,destroyOnClose:!0,closable:!1,onCancel:s,title:r.createElement(oe.Z,{title:o("Global.CreateTitle",{title:d}),onClose:s,items:[{path:"",breadcrumbName:d},{path:"",breadcrumbName:d}]})},r.createElement(Ve,{onSubmit:e=>l(e),isPending:a,initialValues:n}))};const Ae=({orderId:e,moduleType:t})=>{const{t:n}=(0,E.$)(),{profile:{roles:a}}=(0,r.useContext)(p.Vo),i=!!(null==a?void 0:a.find((e=>"partner"===e.slug))),[o,d]=(0,r.useState)(!1),[s,c]=(0,r.useState)(-1),[m,u]=(0,r.useState)(0),[v,b]=(0,r.useState)([]),[g,y]=(0,r.useState)(),[h,f]=(0,r.useState)(!1),[Z,P]=(0,r.useState)(!1),[_,O]=(0,r.useState)({page:1,per_page:10}),[S,w]=(0,r.useState)();(0,r.useEffect)((()=>{d(!0),((e,t)=>_e(void 0,void 0,void 0,(function*(){try{const n=yield yield we.getAll({params:e,orderBy:{id:"DESC"},pagination:t.pagination});return[n.data,n.meta]}catch(e){throw new Error(e)}})))({mailableId:e,mailableType:"order-sale"===t||"credit"===t?"order-sale":"subscription"===t?"order-subscription":"order-purchase"},{pagination:_}).then((([e,t])=>{b(e),w(t)})).finally((()=>d(!1)))}),[m,_]);return o?r.createElement(l.aN,{title:n("Order.Email.Loader")}):r.createElement(Le,null,r.createElement(J.Z,null,r.createElement(ee.Z,{span:24},r.createElement(ae.Z,{dataSource:v,columns:je((e=>{c(e.id),Te(e.id).finally((()=>{c(-1),u((e=>e+1))}))}),(e=>{y({template_id:e.id,body:e.body.body,subject:e.subject,customer_email:e.recipient[0]}),P(!0)}),s,i),pagination:!1})),r.createElement(ee.Z,{span:24},r.createElement(Re,null,r.createElement(Ze.Z,{onChange:(e,t)=>O({page:e,per_page:t}),disabled:o,total:null==S?void 0:S.total,current:null==S?void 0:S.current_page,pageSize:(null==S?void 0:S.per_page)||10})))),!i&&r.createElement(Ge,{module:new Ie.JM,onSubmit:n=>{f(!0),ke(n,e,t).finally((()=>{f(!1),P(!1),u((e=>e+1))}))},visible:Z,setVisible:e=>P(e),isPending:h,initialValues:g}))},Le=b.ZP.div`
  padding: 16px;
  & .select-container {
    padding: 5px;
    & .ant-select {
      outline: none;
      margin-left: 3px;
    }
  }
  & .ant-table {
    & th.ant-table-cell {
      color: #fff;
      background: #4a5161;
    }

    & tr {
      &:nth-child(odd) {
        & td.ant-table-cell {
          background: #fbfbfb;
        }
      }

      &:nth-child(even) {
        & td.ant-table-cell {
          background: #f2f2f2;
        }
      }
    }
    & .action-btn {
      color: #4474e7;
    }
  }

  & .action-select {
    min-width: 12vw;
  }

  .table-container {
    width: 100%;
  }
`,Re=b.ZP.div`
  margin-top: 16px;
`,je=(e,t,n,a)=>[{title:"Id",dataIndex:"id",key:"id"},{title:"Subject",dataIndex:"subject",key:"subject"},{title:"Recipients",dataIndex:"recipient",key:"recipient",render:e=>r.createElement("span",null,e[0])},{title:"Action",dataIndex:"id",key:"action",render:(l,i)=>r.createElement(te.Z,null,r.createElement(re.Z,{disabled:a,icon:r.createElement(Y.Z,null),onClick:()=>e(i),loading:n===l},"Resend"),r.createElement(re.Z,{icon:r.createElement(fe.Z,null),onClick:()=>t(i),disabled:a},"Preview"))}];var $e=n(91170),qe=n(86317),Ue=(n(84916),n(82615)),Me=n(55601),Ke=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const ze=new o.Vx("/notice-template");var We=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const Be=e=>We(void 0,void 0,void 0,(function*(){return yield(({locale:e,pagination:t})=>Ke(void 0,void 0,void 0,(function*(){try{const n=yield yield ze.getAll({pagination:t,params:{locale:e}});return[n.data,n.meta]}catch(e){throw new Error(e)}})))(e)})),Xe=({isFormPending:e,orderId:t,language:n,moduleType:a,selectedLocale:o,setTemplateId:d})=>{const[s]=ce.Z.useForm(),{t:c}=(0,E.$)(),[m,u]=(0,r.useState)(e),[p,v]=(0,r.useState)([]),[b,g]=(0,r.useState)(!1),[y,h]=(0,r.useState)(),[f,Z]=(0,r.useState)({page:1,per_page:10});(0,r.useEffect)((()=>{g(!0),Be({pagination:f,locale:o}).then((([e,t])=>{v(e),h(t),g(!1)})).catch((()=>g(!1)))}),[f,o]);return b?r.createElement(l.aN,{title:c("Order.Email.Loader")}):r.createElement(r.Fragment,null,r.createElement(J.Z,null,r.createElement(ee.Z,{span:24},r.createElement(ce.Z,{layout:"horizontal",form:s,colon:!1,name:"order-email",labelAlign:"left",onFinish:({template_id:e})=>{u(!0),Ce(t,{template_id:e,language:n},a).finally((()=>u(!1)))},onFieldsChange:(e,t)=>(e=>{d(e[0].value)})(t)},r.createElement(Me.Z,{name:"template_id"},r.createElement(Ue.ZP.Group,null,r.createElement(te.Z,{direction:"vertical"},r.createElement(J.Z,{gutter:16},p.map((({name:e,id:t,translate:n})=>{var a,l;return r.createElement(ee.Z,{key:t,span:12},r.createElement(Ue.ZP,{value:t},null!==(l=null===(a=null==n?void 0:n.find((e=>e.locale===i.ZP.language)))||void 0===a?void 0:a.name)&&void 0!==l?l:e))})))))),r.createElement(Qe,null,r.createElement(Ze.Z,{onChange:(e,t)=>Z({page:e,per_page:t}),disabled:b,total:null==y?void 0:y.total,current:null==y?void 0:y.current_page,pageSize:(null==y?void 0:y.per_page)||10})),r.createElement(Me.Z,null,r.createElement(l.Ow,{isPending:m,title:c("Order.Email.SendEmail")}))))))},Qe=b.ZP.div`
  margin-left: 16px;
`,{Text:He}=ne.Z,{TabPane:Ye}=v.Z,Je=({orderId:e,moduleType:t})=>{const{t:n}=(0,E.$)(),{profile:{roles:a}}=(0,r.useContext)(p.Vo),l=!!(null==a?void 0:a.find((e=>"partner"===e.slug))),[i,o]=(0,r.useState)(!1),[d,s]=(0,r.useState)(0),[c,m]=(0,r.useState)("de"),[u,b]=(0,r.useState)(),[g,y]=(0,r.useState)(!1);return r.createElement(et,null,r.createElement(J.Z,{className:"first-row"},r.createElement(ee.Z,{span:12},r.createElement(te.Z,null,r.createElement(He,{type:"secondary"},n("Order.Titles.Language"),": "),r.createElement("div",{style:{width:"200px",marginLeft:"8px"}},r.createElement(qe.S,{disabled:l,isClearable:!1,value:c,onChange:e=>m(e.locale)})))),r.createElement(ee.Z,{span:12},r.createElement(tt,null,r.createElement(re.Z,{disabled:l,icon:r.createElement($e.Z,null),color:"blue",onClick:()=>{d?(o(!0),xe(e,{template_id:d},t).then((e=>{b(e),y(!0)})).finally((()=>o(!1)))):Pe.ZP.error(n("Order.Email.TemplateSelectError"))},loading:i},n("Order.Email.ViewContent"))))),r.createElement("br",null),r.createElement(J.Z,null,r.createElement(ee.Z,{span:24},r.createElement(v.Z,{size:"small",type:"card",defaultActiveKey:"1"},r.createElement(Ye,{forceRender:!0,tab:n("Order.Email.GeneralEmail"),key:"1"},r.createElement(Xe,{isFormPending:i,moduleType:t,orderId:e,language:c,selectedLocale:c,setTemplateId:e=>s(e)})),r.createElement(Ye,{forceRender:!0,tab:n("Order.Email.MyEmail"),key:"2",disabled:!0}),r.createElement(Ye,{forceRender:!0,tab:n("Order.Email.MyEmailFromOthers"),disabled:!0,key:"3"})))),!l&&r.createElement(Ge,{module:new Ie.JM,onSubmit:n=>{o(!0),ke(Object.assign(Object.assign({},n),{template_id:d,language:c}),e,t).finally((()=>{o(!1),y(!1)}))},visible:g,setVisible:e=>y(e),isPending:i,initialValues:u}))},et=b.ZP.div`
  padding: 16px;
  box-shadow: 0 0 10px #eaece4;
  width: 100%;

  & .first-row {
    margin-bottom: 12px;
  }

  & .ant-space {
    width: 100%;
    gap: 0px !important;
    border-radius: 5px;
  }

  & .ant-radio-group {
    padding: 8px;
    width: 100%;

    & .ant-radio-wrapper {
      padding: 8px;
      margin: 8px;
      width: 100%;
      background-color: #e5e7e9;
    }
  }
`,tt=b.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    cursor: pointer;
  }
`,{TabPane:nt}=v.Z;var rt=({orderId:e,moduleType:t})=>{const{t:n}=(0,E.$)();return e?r.createElement(at,null,r.createElement(v.Z,{type:"card",defaultActiveKey:"1",destroyInactiveTabPane:!0},r.createElement(nt,{tab:n("Order.Email.Templates"),key:"1"},r.createElement(Je,{orderId:e,moduleType:t})),r.createElement(nt,{tab:n("Order.Email.SentEmails"),key:"2"},r.createElement(Ae,{orderId:e,moduleType:t})))):r.createElement(l.aN,{title:n("Order.Email.Loader")})};const at=b.ZP.div`
  margin: 16px;
`;n(73675),n(42823);var lt=n(68326),it=n(55441);var ot=({orderSale:e,moduleType:t})=>{var n,a;const{t:i}=(0,E.$)(),d={"order-sale":new Ie.ZP,credit:new m,subscription:new it.Z,purchase:new lt.ZP}[t],s=(0,r.useCallback)((e=>{switch(e){case"order-sale":default:return"/admin/orders/order-sale";case"credit":return"/admin/orders/credit";case"subscription":return"/admin/orders/subscription";case"purchase":return"/admin/orders/purchase";case"partner":return"/admin/orders/partner"}}),[]),c=s(t);return r.createElement(l.Xg,{module:d},r.createElement(dt,null,r.createElement("span",null,i("Order.Titles.UserIdFilter")," ")),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasNew:!1,hasSearch:!0,noDescription:!0,noListView:!0}),e?r.createElement(l.s_.ListView,{module:d,updateLink:c,tableScroll:{x:1450,y:750},params:{supplierId:"purchase"===t?null===(a=null===(n=e)||void 0===n?void 0:n.supplier)||void 0===a?void 0:a.id:void 0,userId:"purchase"===t?void 0:String("credit"===t?e.order.user_id:e.user_id),orderBy:{id:"DESC"}},customEntities:"order-sale"===t?{getAll:new o.Vx("/order-sales/list",d.title[0])}:{getAll:new o.Vx(d.entity,d.title[0])}}):r.createElement(l.aN,{title:i("Order.Orders.Loader")})))};const dt=b.ZP.div`
  background-color: #4a5161;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 3;

  & > * {
    width: 33.3%;
  }

  & span {
    width: auto;
    color: white;
    margin-right: 14px;
  }
`;var st=n(70045),ct=n(12606),mt=n(61320),ut=n.n(mt),pt=n(38009),vt=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const Et=e=>vt(void 0,void 0,void 0,(function*(){return yield(0,pt.i7)(e)})),bt=e=>vt(void 0,void 0,void 0,(function*(){const t=yield(0,pt.HU)(e);return{documents:t.documents.map((e=>{var t,n;return{id:e.id,name:null!==(n=null===(t=e.documentType)||void 0===t?void 0:t.name)&&void 0!==n?n:" - ",createDate:e.created_at?new Date(e.created_at):null,fileURL:e.link,number:e.number}})),options:{invoiceId:t.invoice_id,orderSaleId:e}}}));var gt=n(88602),yt=n(91099),ht=n(97311),ft=n(28681),Zt=n(19511);const Pt=b.ZP.div`
  display: flex;
  justify-content: ${e=>e.alignEnd?"flex-end":"center"};
  align-items: center;

  & > * {
    border-radius: 50% !important;
    width: 30px !important;
    height: 30px !important;
    border: 1px solid #326d94;
  }
`;var _t=({title:e,child:t,secondButton:n,defaultEditValue:a="",min:l,max:i,secondTitle:o="",hasSecond:d=!1,disabled:s=!1,isNumber:c=!1,isDate:m=!1,isConstant:u=!1,isPending:p=!1,onSubmit:v,shippedOn:b,onCancelShippedOn:y})=>{const[h,f]=(0,r.useState)(!1),[Z,P]=(0,r.useState)(a),[_,O]=(0,r.useState)(""),{t:S}=(0,E.$)();return r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},e),r.createElement(ee.Z,{span:u?16:h||b||n?12:14},h?c?r.createElement(J.Z,null,r.createElement(ee.Z,{span:d?8:24},r.createElement(ve.Z,{disabled:p||s,value:Z,min:l,max:i,onChange:e=>P(e)})),d&&r.createElement(ee.Z,{span:16},r.createElement(ve.Z,{placeholder:o,disabled:p||s,value:_,onChange:e=>O(e)}))):m?r.createElement(ft.Z,{format:(0,g._A)(),disabled:p||s,defaultValue:Z?ut()(Z):void 0,placeholder:S("Order.Settings.SelectDate"),onChange:e=>e&&P(e)}):r.createElement(me.Z,{min:l,max:i,disabled:p||s,value:Z,onChange:e=>P(e.target.value)}):t),!u&&!h&&!s&&r.createElement(ee.Z,{span:2},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(fe.Z,null),size:"small",type:"ghost",onClick:()=>f(!0),disabled:s}))),!u&&!h&&!s&&b&&r.createElement(ee.Z,{span:2},r.createElement(Pt,null,r.createElement(Zt.Z,{className:"action-btn",title:S("Order.Edit.CancelShippedOnTooltip")},r.createElement(re.Z,{icon:r.createElement(gt.Z,null),size:"small",type:"ghost",onClick:()=>y(null),disabled:s,loading:p})))),!u&&!h&&!s&&n&&n,!u&&h&&!s&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:2},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(yt.Z,null),size:"small",type:"ghost",loading:p,onClick:()=>null==v?void 0:v(Z,_)}))),r.createElement(ee.Z,{span:2},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(ht.Z,null),size:"small",type:"ghost",onClick:()=>f(!1)})))))};var Ot=({orderSale:e,moduleType:t})=>{var n,a,o,d,s,c,m,u,v,b,y,f,P,_,O,S,w;const{t:N}=(0,E.$)(),{profile:{roles:x}}=(0,r.useContext)(p.Vo),k=!!x.find((e=>"partner"===e.slug)),[T,I]=(0,r.useState)(null),[D,V]=(0,r.useState)(void 0),[F,G]=(0,r.useState)(null!==(n=null==e?void 0:e.flags)&&void 0!==n?n:[]);if((0,r.useEffect)((()=>{if(e)switch(t){case"order-sale":I((0,C.GZ)(e));break;case"credit":I((({order_date:e,order:t,price_percentage_discount:n})=>{var r,a,l,i;const o=null!==(r=t.id)&&void 0!==r?r:-1,d=t.user?t.user.id:0,s=t.user?(null===(a=t.user.person)||void 0===a?void 0:a.first_name)+" "+(null===(l=t.user.person)||void 0===l?void 0:l.last_name):"-",c=t.user.sponsor?{id:t.user.sponsor.user_id,name:""}:void 0,m=null!==(i=t.ip)&&void 0!==i?i:"-",u=e?new Date(e):null,p=t.estimate_delivery_date?new Date(t.estimate_delivery_date):null;return{sponsor:c,shippedOn:t.shipped_on?new Date(t.shipped_on):null,orderSaleId:o,customerId:d,customerName:s,checkoutDate:u,ipAddress:m,estimatedShippingDate:p,ppd:n}})(e));break;case"subscription":I((e=>{var t,n,r,a;const l=null!==(t=e.id)&&void 0!==t?t:-1,i=e.user?e.user.id:0,o=e.user?(null===(n=e.user.person)||void 0===n?void 0:n.first_name)+" "+(null===(r=e.user.person)||void 0===r?void 0:r.last_name):"-",d=e.user.sponsor?{id:e.user.sponsor.user_id,name:""}:void 0,s=null!==(a=e.ip)&&void 0!==a?a:"-";return{sponsor:d,orderSaleId:l,customerId:i,customerName:o,checkoutDate:e.order_date?new Date(e.order_date):null,ipAddress:s,estimatedShippingDate:e.estimate_delivery_date?new Date(e.estimate_delivery_date):null,ppd:e.price_percentage_discount,lastOrderSaleDate:e.last_order_sale_date?new Date(e.last_order_sale_date):void 0,nextOrderSaleDate:e.next_order_sale_date?new Date(e.next_order_sale_date):void 0}})(e));break;case"purchase":I((e=>{var t,n,r,a;const l=null!==(t=e.id)&&void 0!==t?t:-1,i=e.supplier?e.supplier.id:0,o=e.supplier?(null===(n=e.supplier.people)||void 0===n?void 0:n.first_name)+" "+(null===(r=e.supplier.people)||void 0===r?void 0:r.last_name):"-",d=null!==(a=e.ip)&&void 0!==a?a:"-";return{orderSaleId:l,customerName:o,customerId:i,checkoutDate:e.order_date?new Date(e.order_date):null,ipAddress:d,estimatedShippingDate:e.estimate_delivery_date?new Date(e.estimate_delivery_date):null}})(e));break;case"partner":I((e=>{var t,n,r,a;const l=null!==(t=e.id)&&void 0!==t?t:-1,i=e.user?e.user.id:0,o=e.user?(null===(n=e.user.person)||void 0===n?void 0:n.first_name)+" "+(null===(r=e.user.person)||void 0===r?void 0:r.last_name):"-",d=e.user.sponsor?{id:e.user.sponsor.user_id,name:""}:void 0,s=null!==(a=e.ip)&&void 0!==a?a:"-";return{orderSaleId:l,sponsor:d,customerId:i,customerName:o,checkoutDate:e.created_at?new Date(e.created_at):null,ipAddress:s,estimatedShippingDate:e.estimate_delivery_date?new Date(e.estimate_delivery_date):null}})(e))}}),[e]),!T)return r.createElement(l.aN,null);const{ipAddress:A,estimatedShippingDate:L,customerName:R,customerId:j,checkoutDate:$}=T;return r.createElement(wt,null,r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},St({t:N,orderSale:e})[t]),r.createElement(ee.Z,{span:12},r.createElement("strong",null,null!==(a=null==e?void 0:e.id)&&void 0!==a?a:" - "))),r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,i.ZP.t("purchase"===t?"Order.Titles.Supplier":"Order.Titles.Customer"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,R," (",r.createElement(h.rU,{to:(0,g.kh)(j,"purchase"===t?"supplier":null!==(null===(o=null==e?void 0:e.user)||void 0===o?void 0:o.partner)?"partner":"user")},j),")"))),(null===(d=null==e?void 0:e.user)||void 0===d?void 0:d.sponsor)&&r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,"Sponsor")),r.createElement(ee.Z,{span:12},r.createElement("strong",null,null===(c=null===(s=null==e?void 0:e.user)||void 0===s?void 0:s.sponsor)||void 0===c?void 0:c.fullname,"(",r.createElement(h.rU,{to:(0,g.kh)(null===(u=null===(m=null==e?void 0:e.user)||void 0===m?void 0:m.sponsor)||void 0===u?void 0:u.user_id,"partner")},null===(b=null===(v=null==e?void 0:e.user)||void 0===v?void 0:v.sponsor)||void 0===b?void 0:b.user_id),")"))),"purchase"!==t&&r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:24},"credit"===t?r.createElement(_t,{disabled:k,isPending:D,title:r.createElement("span",null,N("Order.Titles.Checkout")),child:r.createElement(ne.Z.Text,{strong:!0},$?(0,g.Wb)($):"-"),isDate:!0,defaultEditValue:$?ut()($):void 0,onSubmit:t=>{V(!0),(0,Z._Z)(e.id,ut()(t).format("YYYY-MM-DD")).then((e=>{Pe.ZP.success(null==e?void 0:e.message),V(!1)})).catch((e=>{ct.Z.error(e.message)}))}}):"order-sale"===t?r.createElement(_t,{disabled:k,isPending:D,title:r.createElement("span",null,N("Order.Titles.Checkout")),child:r.createElement(ne.Z.Text,{strong:!0},$?(0,g.Wb)($):"-"),isDate:!0,defaultEditValue:$?ut()($):void 0,onSubmit:t=>{V(!0),(0,ie.n6)(e.id,ut()(t).format("YYYY-MM-DD")).then((e=>{Pe.ZP.success(null==e?void 0:e.message),V(!1)})).catch((e=>{ct.Z.error(e.message)}))}}):r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.Checkout"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,$?(0,g.Wb)($):"-"))))),"purchase"!==t&&r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.IPAddress"))),r.createElement(ee.Z,{span:12},r.createElement(J.Z,{align:"middle"},r.createElement(ee.Z,{span:20},r.createElement("strong",null,A))))),"subscription"!==t&&"purchase"!==t&&r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.EstimatedShipping"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,L?(0,g.Wb)(L):"-"))),"subscription"===t&&r.createElement(r.Fragment,null,r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.LastDelDate"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,T.lastOrderSaleDate?(0,g.Wb)(T.lastOrderSaleDate):"-"))),r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.NextDelDate"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,T.nextOrderSaleDate?(0,g.Wb)(T.nextOrderSaleDate):"-")))," "),"purchase"!==t&&"partner"!==t&&(T.ppd||[]).map((({percentage_of_provision:n,total:a})=>{var l,i,o,d,s;return r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.POP"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,n,"%"),r.createElement("span",null,"(",r.createElement("strong",null,(0,g.v3)("credit"===t?null!==(o=null===(i=null===(l=e)||void 0===l?void 0:l.order.currency)||void 0===i?void 0:i.iso3)&&void 0!==o?o:"EUR":null!==(s=null===(d=null==e?void 0:e.currency)||void 0===d?void 0:d.iso3)&&void 0!==s?s:"EUR",a)),")")))})),r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.Flag"))),r.createElement(ee.Z,{span:12},r.createElement(st.l,{value:F,onChange:n=>(n=>{var r;V(!0),(0,C.Ge)({id:null!==(r=null==e?void 0:e.id)&&void 0!==r?r:-1,flag_ids:n.map((e=>e.id))},t).then((()=>{V(void 0),G(n)})).catch((()=>V(void 0)))})(n),disabled:D||k,isPending:D,isMulti:!0}))),"order-sale"===t&&e.coupon[0]&&r.createElement(J.Z,{className:"item"},r.createElement(ee.Z,{span:12},r.createElement("span",null,N("Order.Titles.Coupon"))),r.createElement(ee.Z,{span:12},r.createElement("strong",null,(null===(f=null===(y=e.coupon[0])||void 0===y?void 0:y.couponCodes)||void 0===f?void 0:f[0].code)+" ("+("percent"===(null===(P=e.coupon[0])||void 0===P?void 0:P.type)?(null===(_=e.coupon[0])||void 0===_?void 0:_.amount)+"%":(0,g.v3)(null!==(S=null===(O=e.currency)||void 0===O?void 0:O.iso3)&&void 0!==S?S:"EUR",null===(w=e.coupon[0])||void 0===w?void 0:w.amount))+")"))))};const St=({t:e,orderSale:t})=>{var n,a,l;return{"order-sale":r.createElement("span",null,e("Order.Titles.OrderSaleId")),credit:r.createElement("span",null,e("Order.Titles.CreditNoteId")," (",e("Global.From")," ",r.createElement(h.rU,{to:"/admin/orders/order-sale/"+(null===(n=null==t?void 0:t.order)||void 0===n?void 0:n.id)},null!==(l=null===(a=null==t?void 0:t.order)||void 0===a?void 0:a.id)&&void 0!==l?l:" - "),")"),subscription:r.createElement("span",null,e("Order.Titles.OrderSubscriptionId")),purchase:r.createElement("span",null,e("Order.Titles.PurchaseSaleId"))}},wt=b.ZP.div`
  border: 1px solid #ededed;

  & .item {
    padding: 8px;
    height: 100%;

    & .info-btn {
      color: #5b67d0;
    }

    &:nth-child(even) {
      background: #f2f2f2;
    }

    & .ant-select {
      width: 100%;
      & .ant-select-selector {
        position: relative;
        border: 1px solid #deeae6;
        outline: none;
        background-color: #fff;
        border-radius: 3px;
      }
    }
  }
`;var Nt=n(54502),xt=n(12621),kt=n(95985),Tt=n(34647),Ct=n(9172),It=n(34940);var Dt=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,E.$)();return r.createElement(ce.Z,{name:"order-credit-generate-form",layout:"vertical",onFinish:e,initialValues:n},r.createElement(J.Z,{gutter:16},r.createElement(ee.Z,{span:24},r.createElement(ce.Z.List,{name:"positions"},(e=>r.createElement(r.Fragment,null,e.map((({key:e,name:t,fieldKey:i},o)=>{var d;return r.createElement(J.Z,{key:e,gutter:16},r.createElement(ce.Z.Item,{name:[t,"orderPositionId"],fieldKey:[i,"orderPositionId"],hidden:!0},r.createElement(me.Z,null)),r.createElement(ee.Z,{span:6},r.createElement(ce.Z.Item,{name:[t,"isActive"],fieldKey:[i,"isActive"],label:" ",valuePropName:"checked"},r.createElement(pe.Z,null,null!==(d=null==n?void 0:n.positions[o].orderName)&&void 0!==d?d:" - "))),r.createElement(ee.Z,{span:6},r.createElement(ce.Z.Item,{name:[t,"priceValue"],fieldKey:[i,"priceValue"],rules:[{required:!0}],label:a("Order.Field.PriceValue")},r.createElement(ve.Z,{min:.01}))),r.createElement(ee.Z,{span:6},r.createElement(ce.Z.Item,{name:[t,"quantity"],fieldKey:[i,"quantity"],rules:[{required:!0}],label:a("Order.Field.Quantity")},r.createElement(ve.Z,{min:1,max:null==n?void 0:n.positions[o].quantity}))),r.createElement(ee.Z,{span:6},r.createElement(ce.Z.Item,{name:[t,"vat"],fieldKey:[i,"vat"],rules:[{required:!0}],label:a("Order.Field.VatValue")},r.createElement(l.LE,{module:new Ie.mh,hasNew:!1,optionSelector:{label:"value",value:"id"},query:{validFromLessThan:null==n?void 0:n.positions[o].createdAt}}))))}))))))),r.createElement(l.Ow,{isPending:t}))};var Vt=({orderId:e,orderSalePositions:t,visible:n,pending:a,onSubmit:l,setVisible:i})=>{const{t:o}=(0,E.$)(),d=new Ie.P9(e),s=d.title[0],c=()=>{i(!1)};return r.createElement(de.Z,{visible:n,width:1300,footer:!1,destroyOnClose:!0,closable:!0,onCancel:c,title:r.createElement(oe.Z,{onClose:c,items:[...d.breadcrumbItems||[],{path:"",breadcrumbName:o("Global.CreateTitle",{title:s})}]})},r.createElement(Dt,{onSubmit:e=>{const t=Object.assign({},e);l(t)},isPending:a,initialValues:{positions:t.filter((e=>e.productVariation&&16!==e.orderPositionType.id)).map((e=>({orderName:e.productVariation.name,createdAt:e.created_at?new Date(e.created_at):null,vat:e.vat,quantity:e.quantity,priceValue:Number(e.price_value.toFixed(2)),orderPositionId:e.id,isActive:!0})))}}))};var Ft=({onSubmit:e,isPending:t,initialValues:n})=>{const{t:a}=(0,E.$)();return r.createElement(ce.Z,{name:"order-split-form",layout:"vertical",onFinish:e,initialValues:n},r.createElement(J.Z,{gutter:16},r.createElement(ee.Z,{span:24},r.createElement(ce.Z.List,{name:"positions"},(e=>r.createElement(J.Z,{gutter:32},e.map((({key:e,name:t,fieldKey:l},i)=>{var o;return r.createElement(ee.Z,{key:e,span:24},r.createElement(J.Z,{gutter:8},r.createElement(ce.Z.Item,{name:[t,"orderPositionId"],fieldKey:[l,"orderPositionId"],hidden:!0},r.createElement(me.Z,null)),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:[t,"isActive"],fieldKey:[l,"isActive"],label:" ",valuePropName:"checked"},r.createElement(pe.Z,null,null!==(o=null==n?void 0:n.positions[i].orderName)&&void 0!==o?o:" - "))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:[t,"quantity"],fieldKey:[l,"quantity"],rules:[{required:!0}],label:a("Order.Field.Quantity")},r.createElement(ve.Z,{min:1,max:null==n?void 0:n.positions[i].quantity})))))}))))))),r.createElement(l.Ow,{isPending:t}))};var Gt=({orderId:e,orderSalePositions:t,visible:n,pending:a,onSubmit:l,setVisible:i})=>{const{t:o}=(0,E.$)(),d=new Ie.EA(e),s=d.title[0],c=()=>{i(!1)};return r.createElement(de.Z,{visible:n,width:960,footer:!1,destroyOnClose:!0,closable:!0,onCancel:c,title:r.createElement(oe.Z,{onClose:c,items:[...d.breadcrumbItems||[],{path:"",breadcrumbName:o("Global.CreateTitle",{title:s})}]})},r.createElement(Ft,{onSubmit:e=>{const t=Object.assign({},e);l(t)},isPending:a,initialValues:{positions:t.filter((e=>e.productVariation)).map((e=>({orderName:e.productVariation.name,quantity:e.quantity,orderPositionId:e.id,isActive:!0})))}}))};const{Option:At}=Ct.Z,Lt=({orderSale:e,moduleType:t,updateTab:n})=>{var l,i;const{t:o}=(0,E.$)(),d=(0,a.s0)(),{profile:{roles:s}}=(0,r.useContext)(p.Vo),m=!!s.find((e=>"partner"===e.slug)),[u,v]=(0,r.useState)(!1),[b,g]=(0,r.useState)(!1),[y,h]=(0,r.useState)(!1),[f,Z]=(0,r.useState)(!1);return r.createElement(jt,null,r.createElement(J.Z,{className:"actions",gutter:[16,16]},r.createElement(ee.Z,null,r.createElement(te.Z,null,Rt({orderSale:e,pending:u,onUnSubClick:()=>{var r;"credit"===t&&e.isEditable||(null==e?void 0:e.is_editable)?(g(!0),(0,D.rr)(null!==(r=null==e?void 0:e.id)&&void 0!==r?r:-1).then((()=>{g(!1),n(c.t.Overview)}))):Pe.ZP.error(o("Order.Overview.EditError"))},unsubPending:b,copy:e=>{confirm(o("Order.Overview.CopyQuestion"))&&(v(!0),(0,ie.Ng)(e).then((e=>{v(!1),d("/admin/orders/order-sale/"+e)})).catch((()=>v(!1))))},onSplitClick:()=>{"credit"===t&&e.isEditable||(null==e?void 0:e.is_editable)?Z(!0):Pe.ZP.error(o("Order.Overview.EditError"))},t:o,isOrderReadOnly:m})[t])),"credit"!==t&&r.createElement(ee.Z,null,r.createElement(te.Z,null,r.createElement(Ct.Z,{disabled:m,onChange:n=>{var r,a;"order-sale"===t&&"2"===n?h(!0):"purchase"===t&&"2"===n?(v(!0),(0,I.sV)(null!==(r=null==e?void 0:e.id)&&void 0!==r?r:-1).then((()=>{v(!1)})).catch((()=>v(!1)))):"subscription"===t&&"2"===n&&(v(!0),(0,D.Zh)(null!==(a=null==e?void 0:e.id)&&void 0!==a?a:-1).then((()=>{v(!1)})).catch((()=>v(!1))))},placeholder:o("Order.Credit.Title_other"),defaultValue:"1",value:"1"},r.createElement(At,{value:"1",disabled:!0},o("Global.SelectPlaceholder",{title:o("Global.Action")})),r.createElement(At,{value:"2",disabled:"purchase"===t&&!e.is_editable},o("order-sale"===t?"Order.Credit.Generate":"purchase"===t?"Order.Submit":"Order.Generate"))),e.has_order_credit_note&&r.createElement(It.Z,{icon:r.createElement(Nt.Z,null),color:"error"},o("Global.Available"))))),"order-sale"===t&&r.createElement(Vt,{onSubmit:t=>{var n;v(!0),(0,C.Ju)(null!==(n=null==e?void 0:e.id)&&void 0!==n?n:-1,t).then((e=>{v(!1),d("/admin/orders/credit/"+e)})).catch((()=>v(!1)))},orderId:null!==(l=null==e?void 0:e.id)&&void 0!==l?l:-1,orderSalePositions:e.orderSalePositions.filter((e=>{var t;return 3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})),pending:u,visible:y,setVisible:h}),"order-sale"===t&&!m&&r.createElement(Gt,{onSubmit:t=>{var n;v(!0),(0,C.ur)(null!==(n=null==e?void 0:e.id)&&void 0!==n?n:-1,t).then((e=>{v(!1),d("/admin/orders/order-sale/"+e)})).catch((()=>v(!1)))},orderId:null!==(i=null==e?void 0:e.id)&&void 0!==i?i:-1,orderSalePositions:e.orderSalePositions.filter((e=>{var t;return 3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})),pending:u,visible:f,setVisible:Z}))},Rt=({onSplitClick:e,onUnSubClick:t,unsubPending:n,orderSale:a,pending:l,copy:i,t:o,isOrderReadOnly:d})=>({"order-sale":r.createElement(r.Fragment,null,r.createElement(Zt.Z,{className:"action-btn",title:o("Order.Overview.Split")},r.createElement(re.Z,{shape:"default",icon:r.createElement(xt.Z,null),onClick:e,disabled:d})),r.createElement(Zt.Z,{className:"action-btn",title:o("Order.Overview.Copy")},r.createElement(re.Z,{disabled:d,shape:"default",icon:r.createElement(kt.Z,null),onClick:()=>{var e;return i(null!==(e=null==a?void 0:a.id)&&void 0!==e?e:-1)},loading:l}))),subscription:r.createElement(r.Fragment,null,r.createElement(Zt.Z,{className:"action-btn",title:o("Order.Overview.Unsubscribe")},r.createElement(re.Z,{shape:"default",icon:r.createElement(Tt.Z,null),onClick:t,disabled:d,loading:n})))}),jt=b.ZP.div`
  & .actions {
    border-radius: 4px;
    padding: 16px;
    width: 100%;
    background: #c9e9ff;
    margin: 16px;

    & .ant-select {
      min-width: 180px;
      & .ant-select-selector {
        position: relative;
        border: none;
        font-size: small;
        font-weight: 300;
        outline: none;
        background-color: #fff;
        border-radius: 8px;
      }
    }

    & .action-btn {
      color: #026cf0;
    }
  }
`;n(6673);const $t=b.ZP.span`
  width: fit-content;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: top;
`,qt=b.ZP.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.color};
`;var Ut=({color:e="#D50000"})=>r.createElement($t,null,r.createElement(qt,{color:e})),Mt=n(72538);const Kt={invoice:{"order-sale":e=>`order-sales/${e}/invoice-contact-group`,subscription:e=>`order-subscriptions/${e}/invoice-contact-group`,purchase:e=>`order/purchases/${e}/invoice-contact-group`,partner:e=>`order-partner/${e}/invoice-contact-group`},delivery:{"order-sale":e=>`order-sales/${e}/delivery-contact-group`,subscription:e=>`order-subscriptions/${e}/delivery-contact-group`,purchase:e=>`order/purchases/${e}/delivery-contact-group`,partner:e=>`order-partner/${e}/delivery-contact-group`}};var zt=({visible:e,initialValue:t,orderSaleId:n,moduleType:a,onDone:l,userId:i,setVisible:d})=>r.createElement(de.Z,{visible:"none"!==e,width:1300,footer:!1,destroyOnClose:!0,closable:!0,onCancel:()=>{d("none")}},r.createElement(Mt.default,{singleData:t,api:t=>new o.Vx("").request({url:Kt[e][a](n),method:"PUT",body:Object.assign(Object.assign({},t),{user_id:i})}).then((()=>{d("none"),l()}))}));var Wt=({orderSale:e,moduleType:t,updateTab:n})=>{var a,i,o,d,s,m;const{t:u}=(0,E.$)(),{profile:{roles:v,id:b}}=(0,r.useContext)(p.Vo),g=!!v.find((e=>"partner"===e.slug)),[y,f]=(0,r.useState)(+g),[Z,P]=(0,r.useState)("none"),_={credit:e.order,"order-sale":e,subscription:e,purchase:e,partner:e}[t];return r.createElement(Bt,null,r.createElement("div",{className:"tabs"},r.createElement(te.Z,null,(!g||(null==_?void 0:_.user_id)===b||"partner"===t)&&r.createElement(re.Z,{size:"large",onClick:()=>f(0),type:0===y?"primary":"default"},u("Order.Tab.CustomerData")),"purchase"!==t&&r.createElement(re.Z,{size:"large",type:1===y?"primary":"default",onClick:()=>f(1)},r.createElement("span",{style:{height:"100%"}},u("Order.Tab.CustomerNotes")),(null==e?void 0:e.description)&&r.createElement(Ut,null)))),0===y?r.createElement(te.Z,{direction:"vertical",className:"contents"},r.createElement(l.UQ,{size:"small",title:u("Order.Titles.InvoiceAddress"),otherIcons:()=>"credit"!==t&&"purchase"!==t&&"partner"!==t?r.createElement(Xt,null,r.createElement(re.Z,{disabled:g,icon:r.createElement(fe.Z,{color:"#326D94"}),size:"small",type:"ghost",onClick:e=>{var t;e.stopPropagation(),_.invoice_id||(null===(t=_)||void 0===t?void 0:t.invoice_id)?Pe.ZP.error(u("Order.EditError")):P("invoice")}})):null},r.createElement("div",{className:"accordion-details"},r.createElement("p",null,"ID : ",r.createElement(h.rU,{to:`/admin/users/manage/user/${_.user_id}`},_.user_id)),r.createElement("div",{dangerouslySetInnerHTML:{__html:null!==(o=null===(i=null===(a=_.invoiceContactGroup)||void 0===a?void 0:a.address)||void 0===i?void 0:i.address_complete)&&void 0!==o?o:" - "}})))):r.createElement(te.Z,{direction:"vertical",className:"contents"},r.createElement(l.UQ,{size:"small",title:u("Order.Titles.Description")},r.createElement("div",{className:"accordion-details"},null!==(d=null==e?void 0:e.description)&&void 0!==d?d:" - "))),"credit"!==t&&"none"!==Z&&r.createElement(zt,{moduleType:t,userId:null===(s=null==e?void 0:e.user)||void 0===s?void 0:s.id,initialValue:"invoice"===Z?_.invoiceContactGroup:_.deliveryContactGroup,onDone:()=>n(c.t.Overview),orderSaleId:null!==(m=null==e?void 0:e.id)&&void 0!==m?m:-1,setVisible:P,visible:Z}))};const Bt=b.ZP.div`
  & .tabs {
    padding-bottom: 16px;

    & .ant-btn-primary {
      background: #009ddc;
      border: 1px solid #009ddc;
    }
  }

  & .contents {
    width: 100%;

    & .accordion-details {
      padding: 16px;
      min-height: 150px;
      background: #fbfbfb;
    }
  }
`,Xt=b.ZP.div`
  margin-right: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    border-radius: 50% !important;
    width: 30px !important;
    height: 30px !important;
    border: 1px solid #326d94;
  }
`;var Qt=({value:e,child:t,onSubmit:n,orderId:a,vatValue:l,updateTab:i})=>{const[o,d]=(0,r.useState)(!1),[s,c]=(0,r.useState)(0),[m,u]=(0,r.useState)(!1),{t:p}=(0,E.$)();return r.createElement(J.Z,{style:{width:o?"":"100%",justifyContent:"center",alignItems:"center",height:"100%"}},!o&&t,o&&r.createElement(ee.Z,{span:10},r.createElement(ve.Z,{min:0,onChange:e=>c(e),defaultValue:Math.round(100*Number(e))/100})),o&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:4},r.createElement(Pt,null,r.createElement(re.Z,{onClick:()=>{u(!0),n(a,Math.round(100*Number(s)/(1+l/100))/100).then((()=>{Pe.ZP.success(p("Order.Position.OrderPositionUpdate")),d(!1),u(!1),i(le.t.All)})).catch((e=>{ct.Z.error(e.message),u(!1)}))},icon:r.createElement(yt.Z,null),size:"small",type:"ghost",loading:m}))),r.createElement(ee.Z,{span:4},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(ht.Z,null),size:"small",type:"ghost",onClick:()=>d(!1)})))),!o&&r.createElement(ee.Z,{span:10},r.createElement(Pt,null,r.createElement(re.Z,{style:{marginLeft:"5px",width:"50px !important"},icon:r.createElement(fe.Z,null),size:"small",type:"ghost",onClick:()=>d(!0)}))))};function Ht({title:e,children:t}){return r.createElement(Yt,null,r.createElement("div",{className:"title"},r.createElement("span",null,e)),r.createElement("div",{className:"description"},t))}const Yt=b.ZP.div`
  & .title {
    color: #fff;
    background: #4a5161;
    text-align: center;
    border-radius: 2px;
    padding: 0 16px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .description {
    margin-top: 2px;
    background: #f2f2f2;
    max-width: 100%;
    color: #4a5161;
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    padding: 0 8px;
    font-weight: 500;
  }
`,{Option:Jt}=Ct.Z,en=({orderSale:e,moduleType:t,updateTab:n})=>{const{t:a}=(0,E.$)(),{profile:{roles:i},loggedInUserRole:o}=(0,r.useContext)(p.Vo),d=e&&e.orderSalePositions?e.orderSalePositions.find((e=>"career step bonus"===e.orderPositionType.name)):void 0,s=e&&e.orderSalePositions?e.orderSalePositions.find((e=>"User Discount"===e.orderPositionType.name)):void 0,m=e&&e.orderSalePositions?e.orderSalePositions.find((e=>"Shipping Costs"===e.orderPositionType.name)):void 0,u=e&&e.orderSalePositions?e.orderSalePositions.find((e=>"Voucher Level"===e.orderPositionType.name)):void 0,v=e&&e.orderSalePositions?e.orderSalePositions.find((e=>"Promotional Coupon"===e.orderPositionType.name)):void 0,b=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"career step bonus"===e.orderPosition.orderPositionType.name)):void 0,y=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"Shipping Costs"===e.orderPosition.orderPositionType.name)):void 0,h=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"Voucher Level"===e.orderPosition.orderPositionType.name)):void 0,f=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"Coupon Item"===e.orderPosition.orderPositionType.name)):void 0,P=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"Promotional Coupon"===e.orderPosition.orderPositionType.name)):void 0,_=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"Promotional Article"===e.orderPosition.orderPositionType.name)):void 0,O=e&&e.orderCreditNotePositions?e.orderCreditNotePositions.find((e=>"Wallet Point"===e.orderPosition.orderPositionType.name)):void 0,w=!!i.find((e=>"partner"===e.slug)),N=e,x=!!(e&&e.user&&e.user.roles.length>0)&&!!e.user.roles.find((e=>"partner"===e.slug)),[k,T]=(0,r.useState)(null),[I,D]=(0,r.useState)(!1);if((0,r.useEffect)((()=>{if(e)switch(t){case"order-sale":T((0,C.sy)(e));break;case"credit":T(S(e));break;case"subscription":T((e=>{var t,n,r,a,l,i,o,d,s,c,m;const u=null!==(n=null===(t=e.currency)||void 0===t?void 0:t.iso3)&&void 0!==n?n:"EUR",p=e.positions.map((e=>e.productVariation?e.quantity:0)).reduce(((e,t)=>e+t),0),v=e.positions.map((e=>{var t,n,r;return Number(null!==(n=null===(t=e.productVariation)||void 0===t?void 0:t.weight)&&void 0!==n?n:0)*Number(null!==(r=e.quantity)&&void 0!==r?r:0)})).reduce(((e,t)=>e+t),0);return{amountPaid:null!==(r=e.total_payment)&&void 0!==r?r:0,grossValueOfItems:null!==(a=e.total_gross_amount)&&void 0!==a?a:0,iso3:u,itemQuantity:p,netValueOfItems:null!==(l=e.total_net_amount)&&void 0!==l?l:0,returnOnSale:null!==(i=e.return_on_sale)&&void 0!==i?i:0,shippingCosts:e.gross_shipping_cost,totalPrice:null!==(o=e.total_price)&&void 0!==o?o:0,totalQv:null!==(d=e.total_qv)&&void 0!==d?d:0,totalProvisionPrice:null!==(s=e.total_provision_price)&&void 0!==s?s:0,totalProvisionPriceDiscount:null!==(c=e.total_provision_price_discount)&&void 0!==c?c:0,weight:v,wholeVat:null!==(m=e.total_vat_amount)&&void 0!==m?m:0,subscriptionDate:new Date(e.created_at)}})(e));break;case"purchase":T((e=>{var t,n,r,a,l,i,o,d,s,c;const m=null!==(n=null===(t=e.currency)||void 0===t?void 0:t.iso3)&&void 0!==n?n:"EUR",u=e.orderPurchasePositions.map((e=>e.productVariation?e.quantity:0)).reduce(((e,t)=>e+t),0),p=null!==(r=null==e?void 0:e.total_weight_gross)&&void 0!==r?r:0;return{amountPaid:null!==(a=e.total_payment)&&void 0!==a?a:0,grossValueOfItems:null!==(l=e.product_variations_gross_amount)&&void 0!==l?l:0,iso3:m,itemQuantity:u,netValueOfItems:null!==(i=e.total_net_amount)&&void 0!==i?i:0,returnOnSale:null!==(o=e.return_on_sale)&&void 0!==o?o:0,shippingCosts:null!==(d=e.gross_shipping_amount)&&void 0!==d?d:0,totalPrice:null!==(s=e.total_gross_amount)&&void 0!==s?s:0,weight:p,wholeVat:null!==(c=e.total_vat_amount)&&void 0!==c?c:0}})(e));break;case"partner":T((e=>{var t,n,r,a,l,i,o,d,s,c,m;const u=null!==(n=null===(t=e.currency)||void 0===t?void 0:t.iso3)&&void 0!==n?n:"EUR",p=null===(r=e.orderPartnerPositions)||void 0===r?void 0:r.map((e=>e.quantity)).reduce(((e,t)=>e+t),0);return{amountPaid:null!==(a=e.total_payment)&&void 0!==a?a:0,grossValueOfItems:null!==(l=e.product_variations_gross_value)&&void 0!==l?l:0,iso3:u,itemQuantity:p,netValueOfItems:null!==(i=e.total_net_amount)&&void 0!==i?i:0,returnOnSale:null!==(o=e.return_on_sale)&&void 0!==o?o:0,shippingCosts:null!==(d=e.gross_shipping_cost)&&void 0!==d?d:0,totalPrice:null!==(s=e.total_gross_amount)&&void 0!==s?s:0,weight:0,wholeVat:null!==(c=e.total_vat_amount)&&void 0!==c?c:0,userDiscount:null!==(m=e.user_discount)&&void 0!==m?m:"0"}})(e))}}),[e]),!k)return r.createElement(l.aN,null);return r.createElement(tn,null,r.createElement(J.Z,{gutter:4},r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.ItemQuantity")},r.createElement("span",{className:"black-label"},k.itemQuantity))),"credit"!==t&&"partner"!==t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.Weight")},r.createElement("span",{className:"black-label"},(0,g.Xl)(k.weight)))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.NetValueOfItems")},r.createElement("span",{className:"black-label"},(0,g.v3)(k.iso3,k.netValueOfItems)))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.GrossValueOfItems")},r.createElement("span",{className:"black-label"},(0,g.v3)(k.iso3,k.grossValueOfItems)))),"subscription"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.SubDate")},r.createElement("span",{className:"green-label"},(0,g.Wb)(k.subscriptionDate)))),"subscription"!==t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.AmountPaid")},r.createElement("span",{className:"green-label"},(0,g.v3)(k.iso3,k.amountPaid)))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.TotalPrice")},r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,k.totalPrice))))),"purchase"!==t&&"partner"!==t&&r.createElement(J.Z,{gutter:4,style:{marginTop:"16px"}},"order-sale"===t&&x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.CareerStepDiscount")},"partner"!==o?r.createElement(Qt,{value:d?d.gross_amount:0,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,d?d.gross_amount:0)),onSubmit:ie.Au,orderId:e.id,vatValue:d?d.vat_value:null==e?void 0:e.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,d?d.gross_amount:0)))),!v&&"order-sale"===t&&!x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.UserDiscount")},"partner"!==o?r.createElement(Qt,{value:s?s.gross_amount:0,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,s?s.gross_amount:0)),onSubmit:ie.yM,orderId:e.id,vatValue:s?s.vat_value:null==e?void 0:e.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,s?s.gross_amount:0)))),"order-sale"===t&&x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.VoucherLevel")},"partner"!==o?r.createElement(Qt,{value:u?u.gross_amount:0,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,u?u.gross_amount:0)),onSubmit:ie.Q8,orderId:e.id,vatValue:u?u.vat_value:null==e?void 0:e.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,u?u.gross_amount:0)))),v&&"order-sale"===t&&!x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.PromotionalCoupon")},"partner"!==o?r.createElement(Qt,{value:v.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,v.gross_amount)),onSubmit:ie.bQ,orderId:e.id,vatValue:v.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,v.gross_amount)))),y&&"credit"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.ShippingCost")},"partner"!==o?r.createElement(Qt,{value:y.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,y.gross_amount)),onSubmit:Z.LF,orderId:e.id,vatValue:y.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,y.gross_amount)))),"credit"===t&&x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.VoucherLevel")},"partner"!==o?r.createElement(Qt,{value:h?h.gross_amount:0,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,h?h.gross_amount:0)),onSubmit:Z.kG,orderId:e.id,vatValue:h?h.vat_value:null==e?void 0:e.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,h?h.gross_amount:0)))),"credit"===t&&x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.CareerStepDiscount")},"partner"!==o?r.createElement(Qt,{value:b?b.gross_amount:0,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,b?b.gross_amount:0)),onSubmit:Z.lV,orderId:e.id,vatValue:b?b.vat_value:null==e?void 0:e.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,b?b.gross_amount:0)))),f&&"credit"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.CouponItem")},"partner"!==o?r.createElement(Qt,{value:f.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,f.gross_amount)),onSubmit:Z.MM,orderId:e.id,vatValue:f.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,f.gross_amount)))),P&&"credit"===t&&!x&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.PromotionalCoupon")},"partner"!==o?r.createElement(Qt,{value:P.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,P.gross_amount)),onSubmit:Z.qM,orderId:e.id,vatValue:P.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,P.gross_amount)))),_&&"credit"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.PromotionalArticle")},"partner"!==o?r.createElement(Qt,{value:_.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,_.gross_amount)),onSubmit:Z.SV,orderId:e.id,vatValue:_.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,_.gross_amount)))),O&&"credit"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.WalletPoint")},"partner"!==o?r.createElement(Qt,{value:O.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,O.gross_amount)),onSubmit:Z.a9,orderId:e.id,vatValue:O.vat_value,updateTab:n}):r.createElement("span",{className:"red-label"},(0,g.v3)(k.iso3,O.gross_amount)))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.TotalQv")},r.createElement("span",{className:"black-label"},k.totalQv.toFixed(2)," UP"))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.TotalPP")},r.createElement("span",{className:"black-label"},(0,g.v3)(k.iso3,k.totalProvisionPrice))))),r.createElement(J.Z,{gutter:4,style:{marginTop:"16px"}},m&&"order-sale"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.ShippingCost")},"partner"!==o?r.createElement(Qt,{value:m.gross_amount,child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(k.iso3,m.gross_amount)),onSubmit:ie.B8,orderId:e.id,vatValue:m.vat_value,updateTab:n}):r.createElement("span",{className:"black-label"},(0,g.v3)(k.iso3,m.gross_amount)))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.VatPortion")},r.createElement("span",{className:"black-label"},(0,g.v3)(k.iso3,k.wholeVat)))),r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Position.UserDiscount")},r.createElement("span",{className:"black-label"},(0,g.v3)(k.iso3,k.wholeVat)))),"credit"===t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.Weight")},r.createElement("span",{className:"black-label"},(0,g.Xl)(k.weight)))),"credit"!==t&&"purchase"!==t&&"partner"!==t&&r.createElement(ee.Z,{flex:1},r.createElement(Ht,{title:a("Order.Edit.ReturnOnSale")},r.createElement("span",{className:"black-label"},"number"==typeof(null==k?void 0:k.returnOnSale)?(0,g.v3)(k.iso3,k.returnOnSale):null==k?void 0:k.returnOnSale))),r.createElement(ee.Z,{flex:4},r.createElement(Ht,{title:a("Order.Edit.OrderStatus")},"partner"===t?r.createElement(Ct.Z,{className:"action-select",value:null==N?void 0:N.status,disabled:"Cancel"===(null==N?void 0:N.status),placeholder:a("Global.Action")+"...",onChange:r=>(r=>{(0,C.Nf)(e.id,r,t).then((()=>{n(c.t.All),D(!1)})).catch((()=>D(!1)))})(r)},r.createElement(Jt,{value:"Draft"},"Draft"),r.createElement(Jt,{value:"Print"},"Print"),r.createElement(Jt,{value:"Cancel"},"Cancel")):r.createElement(l.LE,{isClearable:!1,className:"status-select",hasNew:!1,maxItemsToShow:7,module:new Ie.Xq,onChange:r=>{var a;return((e,r)=>{D(!0),(0,C.Nf)(e,r,t).then((()=>{n(c.t.All),D(!1)})).catch((()=>D(!1)))})(null!==(a=null==e?void 0:e.id)&&void 0!==a?a:-1,r.id)},optionSelector:{label:"name",value:"id"},pending:I,disabled:I||w,value:null==e?void 0:e.orderStatus})))))},tn=b.ZP.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & .green-label {
    color: #30e030;
  }

  & .red-label {
    color: #ed2259;
  }

  & .black-label {
    color: #161415;
  }

  & .status-select,
  & .action-select {
    width: 100%;
  }
`;var nn=n(58741),rn=n(32414);const an={"order-sale":(e,t,n)=>{new o.Vx("order-comments",i.ZP.t("Order.Note")).createOne({order_id:e,order_type:"OrderSale",description:t}).finally((()=>null==n?void 0:n()))},subscription:(e,t,n)=>{new o.Vx("order-comments",i.ZP.t("Order.Note")).createOne({order_id:e,order_type:"OrderSubscription",description:t}).finally((()=>null==n?void 0:n()))},purchase:(e,t,n)=>{new o.Vx("order-comments",i.ZP.t("Order.Note")).createOne({order_id:e,order_type:"OrderPurchase",description:t}).finally((()=>null==n?void 0:n()))},credit:(e,t,n)=>{new o.Vx("order-comments",i.ZP.t("Order.Note")).createOne({order_id:e,order_type:"CreditNote",description:t}).finally((()=>null==n?void 0:n()))}};var ln=({isVisible:e,initialValue:t,orderSaleId:n,moduleType:a,onDone:o,setVisible:d})=>{const[s,c]=(0,r.useState)(!1),[m]=ce.Z.useForm(),u=()=>{c(!1),d(!1),o()};return(0,r.useEffect)((()=>{t&&m.setFieldsValue({description:t})}),[t]),r.createElement(de.Z,{visible:e,width:1300,footer:!1,destroyOnClose:!0,closable:!0,onCancel:u},r.createElement(ce.Z,{form:m,onFinish:({description:e})=>{c(!0),an[a](n,e,u)},name:"order-note-form"},r.createElement(J.Z,null,r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:"description",label:i.ZP.t("Global.Description")},r.createElement(De.default,{style:{minHeight:"180px"}})))),r.createElement(J.Z,{justify:"end",className:"btn-primary"},r.createElement(l.Ow,{isPending:s}))))};var on=({orderSale:e,moduleType:t,updateTab:n})=>{var a,i,o;const{t:d}=(0,E.$)(),{profile:{roles:s}}=(0,r.useContext)(p.Vo),m=!!s.find((e=>"partner"===e.slug)),[u,v]=(0,r.useState)(0),[b,y]=(0,r.useState)([]),[f,Z]=(0,r.useState)(!1),[P,_]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{var n,r,a;switch(Z(!0),t){case"order-sale":case"credit":(0,ie.YE)("credit"===t?e.order.id:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:-1).then((e=>{y(e),Z(!1)}));break;case"subscription":(0,D.Ak)(null!==(r=null==e?void 0:e.id)&&void 0!==r?r:-1).then((e=>{y(e),Z(!1)}));break;case"purchase":(0,I.yK)(null!==(a=null==e?void 0:e.id)&&void 0!==a?a:-1).then((e=>{y(e),Z(!1)}))}}),[e]),f?r.createElement(l.aN,null):r.createElement(dn,null,r.createElement("div",{className:"tabs"},r.createElement(te.Z,null,r.createElement(re.Z,{className:0===u?" active":"",size:"large",icon:r.createElement(nn.Z,null),onClick:()=>v(0)},d("Order.Overview.OrderNotes")),r.createElement(re.Z,{className:1===u?" active":"",size:"large",icon:r.createElement(rn.Z,null),onClick:()=>v(1)},d("Order.Overview.StatusHistory")))),0===u?r.createElement(te.Z,{direction:"vertical",className:"contents"},r.createElement(l.UQ,{size:"small",title:d("Global.Notes"),otherIcons:()=>"credit"!==t&&"purchase"!==t?r.createElement(sn,null,r.createElement(re.Z,{disabled:m,icon:r.createElement(fe.Z,{color:"#326D94"}),size:"small",type:"ghost",onClick:e=>{e.stopPropagation(),_(!0)}})):null},r.createElement("div",{className:"accordion-details"},(null===(a=("credit"===t?e.order:e).orderComments)||void 0===a?void 0:a.map(((e,t)=>{var n;return r.createElement("p",{key:t},null!==(n=e.description)&&void 0!==n?n:" - ")})))||" - "))):r.createElement(te.Z,{direction:"vertical",className:"contents"},r.createElement(l.UQ,{size:"small",title:d("Global.History")},r.createElement("div",{className:"accordion-details"},null==b?void 0:b.map(((e,t)=>{var n,a,l,i,o,s,c,m;return r.createElement(r.Fragment,{key:t},r.createElement("p",null,"- ",r.createElement("b",null,d("Global.FullName"),": "),null!==(l=null===(a=null===(n=null==e?void 0:e.user)||void 0===n?void 0:n.person)||void 0===a?void 0:a.full_name)&&void 0!==l?l:" - "),r.createElement("p",null,"- ",r.createElement("b",null,d("Global.Username"),": "),r.createElement(h.rU,{to:`/admin/users/manage/${null===(i=e.user)||void 0===i?void 0:i.id}`},null!==(s=null===(o=null==e?void 0:e.user)||void 0===o?void 0:o.username)&&void 0!==s?s:" - ")),r.createElement("p",null,"- ",r.createElement("b",null,d("Order.Titles.IPAddress"),": "),null!==(c=e.ip_address)&&void 0!==c?c:"-"),r.createElement("p",null,"- ",r.createElement("b",null,d("Order.Titles.Event"),": "),null!==(m=e.event)&&void 0!==m?m:"-"),r.createElement(ae.Z,{dataSource:Object.keys(e.new_values).map((t=>{var n,r;return{title:t,n_value:null!==(n=null==e?void 0:e.new_values[t])&&void 0!==n?n:"-",o_value:null!==(r=null==e?void 0:e.old_values[t])&&void 0!==r?r:"-",date:(null==e?void 0:e.created_at)?(0,g.Wb)(new Date(e.created_at)):null}})),columns:cn,pagination:!1}),r.createElement(ue.Z,null))}))))),!m&&r.createElement(ln,{moduleType:t,initialValue:null===(i=("credit"===t?e.order:e).orderComments)||void 0===i?void 0:i.reduce(((e,t)=>e+"\n"+t.description),""),onDone:()=>n(c.t.Overview),orderSaleId:null!==(o=null==e?void 0:e.id)&&void 0!==o?o:-1,setVisible:_,isVisible:P}))};const dn=b.ZP.div`
  & .tabs {
    padding-bottom: 16px;
    width: 100%;
    justify-content: center;

    & button {
      &.active {
        background-color: #45b339;
        color: white;
        border: 1px solid ${e=>e.theme.colors.success};
      }
    }
  }

  & .contents {
    width: 100%;

    & .icon-positions {
      margin: 8px;
    }

    & .accordion-details {
      padding: 16px;
      min-height: 150px;
      max-height: 256px;
      overflow-y: auto;
      background: #fbfbfb;
    }
  }
`,sn=b.ZP.div`
  margin-right: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    border-radius: 50% !important;
    width: 30px !important;
    height: 30px !important;
    border: 1px solid #326d94;
  }
`,cn=[{title:"Keys",dataIndex:"title",key:"key"},{title:"New Value",dataIndex:"n_value",key:"new_value"},{title:"Old Value",dataIndex:"o_value",key:"old_value"},{title:"Date Time",dataIndex:"date",key:"date"}];function mn({orderSale:e,moduleType:t,updateTab:n}){const{t:a}=(0,E.$)();return e?r.createElement(r.Fragment,null,r.createElement(J.Z,{gutter:16},r.createElement(ee.Z,{span:16},r.createElement(en,{orderSale:e,moduleType:t,updateTab:n})),"partner"!==t&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:8},r.createElement(Ot,{orderSale:e,moduleType:t})),r.createElement(ee.Z,{span:24},r.createElement(Lt,{orderSale:e,moduleType:t,updateTab:n})))),r.createElement(J.Z,{gutter:[16,16]},r.createElement(ee.Z,{span:12,style:{marginTop:"partner"!==t?0:32}},r.createElement(Wt,{orderSale:e,moduleType:t,updateTab:n})),"partner"!==t&&r.createElement(ee.Z,{span:12},r.createElement(on,{orderSale:e,moduleType:t,updateTab:n})))):r.createElement(l.aN,{title:a("Order.Overview.Loader")})}n(74145),n(55088);var un=n(52395),pn=n(14206),vn=n.n(pn),En=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};new o.Vx("/product-variations");var bn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};let gn;const yn=({onChange:e,value:t})=>{const{t:n}=(0,E.$)(),a=(0,r.useRef)(null),[l,i]=(0,r.useState)(t),[o,d]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),[m,u]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,r.useEffect)((()=>{t&&i(t)}),[t]);const v=t=>{c(!1),e({name:t.name,price:Math.round(100*Number(t.sale_price.value))/100})};return r.createElement(hn,{ref:a},r.createElement(me.Z,{size:"large",value:l,onChange:e=>{const t=e.target.value;if(i(t),t.length>3){gn&&gn.abort(),gn=new AbortController;const e=gn.signal;d(!0),c(!0),((e,t)=>En(void 0,void 0,void 0,(function*(){try{return(yield vn().get("/shop/product-variations",{signal:t,params:{page:1,per_page:3,search:""!==e?e:void 0}})).data.data}catch(e){throw new Error(e)}})))(t,e).then((e=>{d(!1),u(e),0===e.length&&c(!1)})).catch((e=>{e.message.includes("Cancel")&&console.log("Request Cancel")}))}},placeholder:n("Global.InputPlaceholder",{title:n("Global.Name")})}),s&&r.createElement("div",{className:"variations"},o?r.createElement("div",{className:"loader"},r.createElement(un.Z,null)):r.createElement("div",{className:"products"},m.map((e=>{var{product:t}=e,n=bn(e,["product"]);return r.createElement(fn,{key:n.id,onClick:()=>v(Object.assign({product:t},n))},r.createElement("div",{className:"image"},r.createElement("img",{alt:n.name,src:p.Xb.PURE_URL+t.file,onError:({currentTarget:e})=>{e.onerror=null,e.className="error-image",e.src="/assets/images/global/product.png"}})),r.createElement("div",{className:"variation-info"},r.createElement(ne.Z.Text,{className:"title"},n.name),r.createElement(ne.Z.Text,null,"Article Number: ",n.number)))})))))},hn=b.ZP.div`
  position: relative;

  & .variations {
    position: absolute;
    right: 0;
    top: 50px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    z-index: 2;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    max-height: 200px;
    overflow-y: auto;

    & .products {
      padding: 8px;
    }
  }

  & .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
  }
`,fn=b.ZP.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  padding: 8px;

  &:hover {
    & .title {
      color: ${({theme:e})=>e.colors.main};
    }
  }

  & .variation-info {
    display: flex;
    flex-direction: column;
  }

  & .image {
    width: 80px;
    height: 80px;
    text-align: center;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      &.error-image {
        width: 60px;
        height: 60px;
      }
    }
  }
`;var Zn=n(39338),Pn=n(62500),_n=n(59748),On=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const Sn=(0,Zn.cn)([]),wn=(0,Zn.cn)(new Date),Nn=(0,Zn.cn)((e=>e(wn)),((e,t,n)=>{t(wn,n)})),xn=(0,Zn.cn)(""),kn=(0,Zn.cn)((e=>e(xn)),((e,t,n)=>{t(xn,n)})),Tn=new Ie.mh,Cn=(0,_n.el)((e=>({queryKey:["OrderVat",e(Sn)],queryFn:()=>On(void 0,void 0,void 0,(function*(){return(yield Tn.apiService.getAll({pagination:{per_page:100},params:{isActive:!0,countryId:kn.read(e),validFromLessThan:Nn.read(e)}})).data}))})));var In=function({module:e,value:t,countryId:n,validFromDate:a,isMulti:l=!1,loading:d=!1,disabled:s=!1,placeholder:c=i.ZP.t("Global.SelectPlaceholder",{title:i.ZP.t("Order.OrderVat")}),menuPlacement:m="bottom",onChange:u}){const[p]=(0,Zn.KO)(Cn),[,v]=(0,Zn.KO)(Nn),[,E]=(0,Zn.KO)(kn);return(0,r.useEffect)((()=>{v(a)}),[a]),(0,r.useEffect)((()=>{E(n)}),[n]),r.createElement(r.Fragment,null,r.createElement(Pn.ZP,{isClearable:!0,isMulti:l,options:null!=p?p:[],placeholder:c,isLoading:!(p&&!d)||void 0,isDisabled:s,onChange:e=>null==u?void 0:u(e),menuPlacement:m,getOptionLabel:e=>{var t;return(null!==(t=null==e?void 0:e.value)&&void 0!==t?t:0)+"%"},getOptionValue:t=>String("purchase"===e?null==t?void 0:t.value:null==t?void 0:t.id),theme:e=>(0,o.$p)(e),classNamePrefix:"react-select",value:t}))};var Dn=({symbolName:e,form:t})=>{const{t:n}=(0,E.$)();return r.createElement(Fn,{isShown:!0,isComponent:!1},r.createElement(Vn,{isComponent:!1},r.createElement(J.Z,null,r.createElement(ee.Z,{span:4,className:"content"},r.createElement(J.Z,{className:"row_item first",align:"top"},r.createElement(ce.Z.Item,{name:"quantity",rules:[{required:!0}],label:r.createElement("strong",null,n("Global.Quantity"))},r.createElement(ve.Z,{min:1})))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:["name"],rules:[{required:!0}]},r.createElement(yn,{onChange:({name:e,price:n})=>{t.setFieldsValue({name:e,net_price:n})}}))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:["description"],rules:[{required:!0}]},r.createElement(me.Z.TextArea,{style:{minHeight:"100px"},placeholder:n("Global.InputPlaceholder",{title:n("Global.Description")})}))))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:8,className:"table_title"},r.createElement("strong",null,n("Order.Position.PriceBracketNet")," ")),r.createElement(ee.Z,{span:8},r.createElement(ce.Z.Item,{name:["net_price"],rules:[{required:!0}]},r.createElement(ve.Z,{min:0}))),r.createElement(ee.Z,{span:1}),r.createElement(ee.Z,{span:7,className:"table_title"},e))))),r.createElement(ee.Z,{span:5,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:10,className:"table_title"},r.createElement("strong",null,n("Order.Position.Vat"),": ")),r.createElement(ee.Z,{span:14},r.createElement(ce.Z.Item,{name:["vat"],rules:[{required:!0}]},r.createElement(In,null))))))))))};const Vn=b.ZP.div`
  padding: 16px;
  background-color: ${({isComponent:e})=>e?"#e8f5e9":""};

  & .content {
    padding-left: 8px;
    padding-right: 4px;

    & .inner {
      height: 100%;

      & .action-btn {
        color: #2b7bb2;
      }
    }

    & .items {
      width: 100%;
      & .tag-item {
        margin-top: 20px;
      }

      & .item {
        padding: 4px 0;
      }

      & .alert {
        background: #c9e9ff;
        padding: 8px 12px;
        position: relative;
        margin-bottom: 8px;
        width: 100%;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #2b7bb2;
        }
      }
    }

    & .price-gross {
      & .info {
        margin-bottom: 16px;
      }

      & .price {
        color: #2b7bb2;
      }
    }
  }

  & .table_title {
    margin-top: 4px;
  }

  & .row_item {
    padding: 8px 12px;
    border: 1px solid #e4e4eb;
    margin-bottom: 4px;
    min-height: 6vh;
    justify-content: center;
    align-items: center;
  }

  & .row_item .ant-form-item,
  & .row_item .tab_title {
    margin: 0 !important;
  }

  & .row_item.first {
    background: #f2f2f2;
  }

  & .product-variation-id-container {
    display: flex;
    align-items: center;
    justify-content: right;

    & > * {
      color: #30e030;
      font-size: 12px;
    }
  }

  & .delivery-date-container {
    display: flex;
    align-items: flex-start;
  }
`,Fn=b.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${e=>e.isComponent?"none":"block"};
  border-bottom: ${e=>e.isComponent?" 2px dashed #43a047":"0"};
`,Gn=({symbolName:e,addOrderPosition:t})=>{const[n]=ce.Z.useForm(),{t:a}=(0,E.$)(),[i,o]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement(J.Z,{className:"header"},r.createElement(ee.Z,{span:4,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,a("Global.Quantity")))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,a("Global.Details")," "))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,a("Order.Position.Price_Discount")))),r.createElement(ee.Z,{span:5,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,a("Order.Position.Vat"))))),r.createElement(te.Z,{direction:"vertical",className:"positions",style:{paddingRight:"16px"}},r.createElement(ce.Z,{form:n,layout:"horizontal",onFinish:e=>{var n;o(!0);const r={name:e.name,unit_id:e.unit_id,vat_id:e.vat.id,quantity:e.quantity,description:e.description,price_value:null!==(n=e.net_price)&&void 0!==n?n:0};t(r,(()=>o(!1)))}},i?r.createElement(l.aN,null):r.createElement(Dn,{form:n,symbolName:e}),r.createElement(l.Ow,{title:a("Global.Save"),isPending:i}))))};var An=n(12482);var Ln=({order:e,symbolName:t,name:n,index:a,version:l,fieldKey:i,form:o,remove:d})=>{var s,c,m,u,v;const{t:b}=(0,E.$)(),{profile:y}=(0,r.useContext)(p.Vo),[h]=(0,r.useState)(null!==(s=e.vat_value)&&void 0!==s?s:0),[f,Z]=(0,r.useState)(null!==(c=e.net_amount)&&void 0!==c?c:0),[P,_]=(0,r.useState)(null!==(m=e.gross_amount)&&void 0!==m?m:0),[O,S]=(0,r.useState)("none");(0,r.useEffect)((()=>{const e=o.getFieldsValue(!0).data;o.setFieldsValue({data:e.map((e=>{var t,n,r,a;return Object.assign(Object.assign({},e),{net_price:Number(null!==(n=null===(t=e.net_amount)||void 0===t?void 0:t.toFixed(2))&&void 0!==n?n:0),gross_price:Number(null!==(a=null===(r=e.gross_amount)||void 0===r?void 0:r.toFixed(2))&&void 0!==a?a:0)})}))})}),[l]),(0,r.useEffect)((()=>{if(f&&P){const e=o.getFieldsValue(!0).data;o.setFieldsValue({data:e.map(((e,t)=>{var n,r;return t===a?Object.assign(Object.assign({},e),{net_price:Number(null!==(n=null==f?void 0:f.toFixed(2))&&void 0!==n?n:0),gross_price:Number(null!==(r=null==P?void 0:P.toFixed(2))&&void 0!==r?r:0)}):e}))})}}),[P,f]);return r.createElement(jn,{isShown:!0,isComponent:!1},r.createElement(Rn,{isComponent:!1},r.createElement(J.Z,null,r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",null,r.createElement("p",null,e.id)))),r.createElement(ce.Z.Item,{name:[n,"id"],fieldKey:[i,"id"],hidden:!0},r.createElement(me.Z,null)),r.createElement(ce.Z.Item,{name:[n,"unit_id"],fieldKey:[i,"unit_id"],hidden:!0},r.createElement(me.Z,null)),r.createElement(ee.Z,{span:4,className:"content"},r.createElement(J.Z,{className:"row_item first",align:"top"},r.createElement(ce.Z.Item,{name:[n,"quantity"],fieldKey:[i,"quantity"],label:r.createElement("strong",null,b("Global.Quantity")),initialValue:null!==(u=e.quantity)&&void 0!==u?u:1,rules:[{required:!0}]},r.createElement(ve.Z,{min:1})))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:[n,"name"],rules:[{required:!0}],fieldKey:[i,"name"]},r.createElement(yn,{onChange:({name:e,price:t})=>{const n=o.getFieldsValue(!0).data;o.setFieldsValue({data:n.map(((t,n)=>n===a?Object.assign(Object.assign({},t),{name:e}):t))}),_(Number((t*(1+h/100)).toFixed(2))),Z(t)}}))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:[n,"description"],rules:[{required:!0}],fieldKey:[i,"description"],initialValue:null!==(v=e.description)&&void 0!==v?v:""},r.createElement(me.Z.TextArea,{style:{minHeight:"100px"},placeholder:b("Global.InputPlaceholder",{title:b("Global.Name")})}))))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item first"},r.createElement(ee.Z,{span:8,className:"table_title"},r.createElement("strong",null,b("Order.Position.PriceBracketGross")," ")),r.createElement(ee.Z,{span:8},r.createElement(ce.Z.Item,{name:[n,"gross_price"],rules:[{required:!0}],fieldKey:[i,"gross_price"]},r.createElement(ve.Z,{min:0,onChange:e=>{const t=Number(e);Z(Number((t/(1+h/100)).toFixed(2))),_(t)},onStep:e=>{const t=Number(e);Z(Number((t/(1+h/100)).toFixed(2))),_(t)}}))),r.createElement(ee.Z,{span:1}),r.createElement(ee.Z,{span:7,className:"table_title"},t))),r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:8,className:"table_title"},r.createElement("strong",null,b("Order.Position.PriceBracketNet")," ")),r.createElement(ee.Z,{span:8},r.createElement(ce.Z.Item,{name:[n,"net_price"],rules:[{required:!0}],fieldKey:[i,"net_price"]},r.createElement(ve.Z,{min:0,onChange:e=>{const t=Number(e);_(Number((t*(1+h/100)).toFixed(2))),Z(t)},onStep:e=>{const t=Number(e);_(Number((t*(1+h/100)).toFixed(2))),Z(t)}}))),r.createElement(ee.Z,{span:1}),r.createElement(ee.Z,{span:7,className:"table_title"},t))))),r.createElement(ee.Z,{span:5,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:10,className:"table_title"},r.createElement("strong",null,b("Order.Position.Vat"),": ")),r.createElement(ee.Z,{span:14},r.createElement(ce.Z.Item,{name:[n,"vat"],fieldKey:[i,"vat"],rules:[{required:!0}]},r.createElement(In,{validFromDate:e.created_at,countryId:y.roles.some((e=>"partner"===e.slug))?y.country.id:void 0}))))),r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:10},r.createElement("strong",{className:"table_title"},b("Global.UpdatedAt"),": ")),r.createElement(ee.Z,{span:14},r.createElement($n,null,e.updated_at?(0,g.Wb)(new Date(e.updated_at)):" - ")))))),r.createElement(ee.Z,{span:1,className:"content"},r.createElement(te.Z,{direction:"vertical"},r.createElement(Zt.Z,{title:b("Order.RemovePosition")},r.createElement(re.Z,{ghost:!0,type:"primary",icon:r.createElement(An.Z,null),loading:"remove"===O,onClick:()=>{var t;S("remove"),d(null!==(t=e.order_partner_id)&&void 0!==t?t:-1,(()=>S("none")))}})))))))};const Rn=b.ZP.div`
  padding: 16px;
  background-color: ${({isComponent:e})=>e?"#e8f5e9":""};

  & .content {
    padding-left: 8px;
    padding-right: 4px;

    & .inner {
      height: 100%;

      & .action-btn {
        color: #2b7bb2;
      }
    }

    & .items {
      width: 100%;
      & .tag-item {
        margin-top: 20px;
      }

      & .item {
        padding: 4px 0;
      }

      & .alert {
        background: #c9e9ff;
        padding: 8px 12px;
        position: relative;
        margin-bottom: 8px;
        width: 100%;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #2b7bb2;
        }
      }
    }

    & .price-gross {
      & .info {
        margin-bottom: 16px;
      }

      & .price {
        color: #2b7bb2;
      }
    }
  }

  & .table_title {
    margin-top: 4px;
  }

  & .row_item {
    padding: 8px 12px;
    border: 1px solid #e4e4eb;
    margin-bottom: 4px;
    min-height: 6vh;
    justify-content: center;
    align-items: center;
  }

  & .row_item .ant-form-item,
  & .row_item .tab_title {
    margin: 0 !important;
  }

  & .row_item.first {
    background: #f2f2f2;
  }

  & .product-variation-id-container {
    display: flex;
    align-items: center;
    justify-content: right;

    & > * {
      color: #30e030;
      font-size: 12px;
    }
  }

  & .delivery-date-container {
    display: flex;
    align-items: flex-start;
  }
`,jn=b.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${e=>e.isComponent?"none":"block"};
  border-bottom: ${e=>e.isComponent?" 2px dashed #43a047":"0"};
`,$n=b.ZP.strong`
  margin-bottom: 4px;
`,qn=({symbolName:e,orderPartnerId:t,positions:n,editOrderSalePosition:a,removeOrderSalePosition:i})=>{const[o]=ce.Z.useForm(),{t:d}=(0,E.$)(),[s,c]=(0,r.useState)(!1),[m,u]=(0,r.useState)(!1),[p,v]=(0,r.useState)(n);return(0,r.useEffect)((()=>{v(n)}),[n]),(0,r.useEffect)((()=>{o.setFieldsValue({data:p.map((e=>Object.assign(Object.assign({},e),{vat:{value:e.vat_value,label:e.vat_value}})))})}),[p]),(0,r.useEffect)((()=>{c((e=>!e))}),[p]),r.createElement(r.Fragment,null,r.createElement(J.Z,{className:"header"},r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,d("Global.ID")))),r.createElement(ee.Z,{span:4,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,d("Global.Quantity")))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,d("Global.Details")," "))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,d("Order.Position.Price_Discount")))),r.createElement(ee.Z,{span:5,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,d("Order.Position.Vat")))),r.createElement(ee.Z,{span:1,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,d("Global.Action"))))),r.createElement(te.Z,{direction:"vertical",className:"positions",style:{paddingRight:"16px"}},r.createElement(ce.Z,{form:o,layout:"horizontal",onFinish:({data:e})=>{u(!0);const n=e.map((e=>{var t;return{id:e.id,name:e.name,unit_id:e.unit_id,vat_id:e.vat_id,quantity:e.quantity,vat_value:e.vat.value,description:e.description,price_value:null!==(t=e.net_price)&&void 0!==t?t:0}}));a(t,n,(()=>u(!1)))}},m?r.createElement(l.aN,null):r.createElement(ce.Z.List,{name:"data"},((t,{})=>r.createElement("div",{className:"form-list"},t.map((({key:t,name:n,fieldKey:a},l)=>p[l]?r.createElement(r.Fragment,{key:t},r.createElement(Ln,{key:t,name:n,form:o,index:l,version:s,fieldKey:a,symbolName:e,order:p[l],remove:i})):null))))),r.createElement(l.Ow,{title:d("Global.Save"),isPending:m}))))};var Un=({order:e})=>{var t,n,a;const{t:l}=(0,E.$)();return r.createElement(Kn,{isShown:!0,isComponent:!1},r.createElement(Mn,{isComponent:!1},r.createElement(J.Z,null,r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",null,r.createElement("p",null,e.id)))),r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,e.quantity))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",{className:"items"},r.createElement("div",{className:"alert"},e.description),r.createElement("div",{className:"item"},r.createElement("strong",null,l("Order.Titles.Updated"),":")," ",r.createElement("span",null,e.updated_at?(0,g.Wb)(new Date(String(e.updated_at).replace(/'-'/g,"/"))):"-"))))),r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",{className:"price"},r.createElement("strong",null,(0,g.v3)("EUR",null!==(t=e.net_amount)&&void 0!==t?t:0))))),r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,null!==(n=e.vat_value)&&void 0!==n?n:"0","%"))),r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",{className:"price"},r.createElement("strong",null,(0,g.v3)("EUR",null!==(a=e.gross_amount)&&void 0!==a?a:0))))))))};const Mn=b.ZP.div`
  padding: 16px;
  background-color: ${({isComponent:e})=>e?"#e8f5e9":""};

  & .content {
    padding-left: 8px;
    padding-right: 4px;

    & .inner {
      height: 100%;

      & .action-btn {
        color: #2b7bb2;
      }
    }

    & .items {
      width: 100%;
      & .tag-item {
        margin-top: 20px;
      }

      & .item {
        padding: 4px 0;
      }

      & .alert {
        background: #c9e9ff;
        padding: 8px 12px;
        position: relative;
        margin-bottom: 8px;
        width: 100%;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #2b7bb2;
        }
      }
    }

    & .price {
      & .info {
        margin-bottom: 16px;
      }

      & .price {
        color: #2b7bb2;
      }
    }
  }

  & .table_title {
    margin-top: 4px;
  }

  & .row_item {
    padding: 8px 12px;
    border: 1px solid #e4e4eb;
    margin-bottom: 4px;
    min-height: 6vh;
    justify-content: center;
    align-items: center;
  }

  & .row_item .ant-form-item,
  & .row_item .tab_title {
    margin: 0 !important;
  }

  & .row_item.first {
    background: #f2f2f2;
  }

  & .product-variation-id-container {
    display: flex;
    align-items: center;
    justify-content: right;

    & > * {
      color: #1a8a1a;
      font-size: 12px;
    }
  }
`,Kn=b.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${e=>e.isShown?"block":"none"};
  border-bottom: ${e=>e.isComponent?" 2px dashed #43a047":"0"};
`,zn=({positions:e})=>{const{t:t}=(0,E.$)();return r.createElement(r.Fragment,null,r.createElement(J.Z,{className:"header"},r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,t("Order.Position.Item")))),r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,t("Order.Position.Quantity")))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,t("Order.Position.ItemText")," "))),r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,t("Order.Position.PriceBracketNet")))),r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,t("Order.Position.Vat")," "))),r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,t("Order.Position.PriceBracketGross"))))),r.createElement(te.Z,{direction:"vertical",className:"positions",style:{paddingBlock:"0",gap:"0"}},null==e?void 0:e.map((e=>r.createElement(Un,{key:e.id,order:e})))))},{TabPane:Wn}=v.Z,Bn=b.ZP.div`
  padding: 16px 0;

  & .tabs {
    padding-bottom: 16px;

    & button {
      min-width: 200px;
    }
  }

  & .positions {
    width: 100%;
    padding-block: 8px;

    & .ant-space-item {
      &:nth-child(odd) {
        background: #fbfbfb;
      }

      &:nth-child(even) {
        background: #f2f2f2;
      }
    }
  }
`,Xn=b.ZP.div`
  border-radius: 12px;
  background: #fff;

  & .header {
    border-radius: ${e=>e.isHeader?"12px 12px 0 0":"0"};
    background: #4a5161;
    color: #fff;
    padding: 16px;
    height: 80px;
    font-size: 0.874rem;
    font-weight: 500;

    & .title {
      height: 100%;

      & .ant-row {
        height: 100%;
        padding-inline: 6px;
      }
    }
  }
`,Qn=b.ZP.div`
  margin-top: 20px;
  width: 100%;
  & .ant-tabs-nav {
    margin-bottom: 0px;
  }
  & .order-tabs .ant-tabs-nav-list {
    margin-left: 0;
    & .ant-tabs-tab {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    & .ant-tabs-tab-btn {
      padding: 0px 28px;
      min-width: 18vh;
      text-align: center;
      font-weight: 500;
    }
    & .ant-tabs-tab-active {
      background-color: #009ddc;
      & .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
`;var Hn=({orderSale:e,updateTab:t})=>{const{t:n}=(0,E.$)(),[a,i]=(0,r.useState)([]);if((0,r.useEffect)((()=>{e&&i((e=>e.orderPartnerPositions)(e))}),[e]),!e)return r.createElement(l.aN,{title:n("Order.Position.Loader")});return r.createElement(Qn,null,r.createElement(v.Z,{className:"order-tabs",defaultActiveKey:"1",type:"card"},r.createElement(Wn,{key:"1",tab:r.createElement("span",null,r.createElement(Y.Z,null),n("Order.Tab.StockUnit"))},r.createElement(Bn,null,r.createElement(Xn,{isHeader:!0},r.createElement(zn,{positions:a})))),r.createElement(Wn,{key:"2",tab:r.createElement("span",null,r.createElement(fe.Z,null),n("Global.Edit"))},r.createElement(Bn,null,r.createElement(Xn,{isHeader:!0},r.createElement(qn,{symbolName:"EUR",positions:a,orderPartnerId:e.id,editOrderSalePosition:(e,n,r)=>{(0,pt.CL)(e,n).then((()=>t(c.t.All))).finally((()=>r()))},removeOrderSalePosition:(e,r)=>{confirm(n("Order.Position.RemoveQuestion"))&&(0,pt.Tx)(e).then((()=>t(c.t.Overview))).finally((()=>r()))}})))),r.createElement(Wn,{key:"3",tab:r.createElement("span",null,r.createElement(H.Z,null),n("Global.Add"))},r.createElement(Bn,null,r.createElement(Xn,{isHeader:!0},r.createElement(Gn,{symbolName:"EUR",addOrderPosition:(n,r)=>{(0,pt.mi)(e.id,n).then((()=>t(c.t.All))).finally((()=>r()))}}))))))},Yn=n(21329),Jn=n(56552),er=n(73857),tr=n(68600),nr=n(32383);var rr=function({onSubmit:e,isPending:t,orderId:n,initialValues:a,isCredit:i}){const[o]=ce.Z.useForm(),{t:d}=(0,E.$)();return(0,r.useEffect)((()=>{a&&(delete a.type,o.setFieldsValue(a))}),[]),r.createElement(ce.Z,{form:o,layout:"vertical",onFinish:e,name:"payment-form",wrapperCol:{span:24},initialValues:{exchange_rate:1,order_id:n,received_at:ut()(),translate:[{locale:void 0,name:""}]}},r.createElement(J.Z,{gutter:[16,0]},r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"order_id",label:d("Order.Title")},r.createElement(me.Z,{disabled:!0}))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{label:d("Global.Amount"),name:"price_value",rules:[{required:!0}]},r.createElement(ve.Z,{min:0})))),r.createElement(J.Z,{gutter:[16,0]},r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{label:d("Order.Payment.CreditDebit"),name:"type",rules:[{required:!0}],initialValue:i?"credit":"debit"},r.createElement(Ct.Z,null,r.createElement(Ct.Z.Option,{value:"credit"},d("Global.Credit")),r.createElement(Ct.Z.Option,{value:"debit"},d("Global.Debit"))))),r.createElement(ee.Z,{span:12},r.createElement(r.Suspense,{fallback:(0,nr.Z)(d("Global.Currency"))},r.createElement(ce.Z.Item,{name:"currency",label:d("Global.Currency"),rules:[{required:!0}]},r.createElement(er.V,null))))),r.createElement(J.Z,{gutter:[16,0]},r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"exchange_rate",label:d("Order.Payment.ExchangeRate")},r.createElement(ve.Z,{disabled:!0}))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{label:d("Global.Description"),name:"description"},r.createElement(me.Z,null)))),r.createElement(ce.Z.Item,{label:d("Order.Payment.IncomingPaymentDate"),name:"received_at"},r.createElement(ft.Z,{format:(0,g._A)()})),r.createElement(ce.Z.Item,{label:d("Order.Payment.Method"),name:"payment_method",rules:[{required:!0}]},r.createElement(tr.m,null)),r.createElement(l.Ow,{isPending:t}))},ar=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var lr=({id:e,module:t,singleData:n,onCallback:a,setVisible:l,isVisible:i,isCredit:o})=>{var d;const{t:s}=(0,E.$)(),c=t.title[0],{mutate:m,isLoading:u}=(0,Jn.useMutation)((({values:e})=>t.apiService.createOne(e))),p=()=>{l(!1)};return r.createElement(Yn.Z,{width:1300,footer:!1,destroyOnClose:!0,closable:!1,onCancel:p,visible:i,title:r.createElement(oe.Z,{onClose:p,items:[...t.breadcrumbItems||[],{path:"",breadcrumbName:s("Global.CreateTitle",{title:c})}]})},r.createElement(rr,{initialValues:Object.assign(Object.assign({},n),{price_value:Math.abs(null!==(d=n.price_value)&&void 0!==d?d:0)}),onSubmit:e=>{const{currency:t,payment_method:n}=e,r=ar(e,["currency","payment_method"]),l=Object.assign({currency_id:null==t?void 0:t.id,payment_method_id:null==n?void 0:n.id},r);m({values:l},{onSuccess:a})},orderId:e,isCredit:o,isPending:u}))};var ir=({orderSale:e,paymentData:t,moduleType:n,updateTab:a})=>{var i,o,d,s,m,u;const{profile:v}=(0,r.useContext)(p.Vo),{t:b}=(0,E.$)(),{profile:{roles:y}}=(0,r.useContext)(p.Vo),h=!!y.find((e=>"partner"===e.slug)),[f,Z]=(0,r.useState)(!1),[P,_]=(0,r.useState)(null);if((0,r.useEffect)((()=>{e&&_("credit"===n?(({total_payment:e,total_pending:t,total_gross_amount:n,paymentMethod:r})=>{var a,l,i;return{total:null!==(a=null==n?void 0:n.toFixed(2))&&void 0!==a?a:0,pending:null!==(l=null==t?void 0:t.toFixed(2))&&void 0!==l?l:0,paid:null!==(i=null==e?void 0:e.toFixed(2))&&void 0!==i?i:0,payment_method:r}})(e):"purchase"===n?(e=>{var t,n,r;const{total_gross_amount:a,total_pending:l,total_payment:i}=e;return{total:null!==(t=null==a?void 0:a.toFixed(2))&&void 0!==t?t:0,pending:null!==(n=null==l?void 0:l.toFixed(2))&&void 0!==n?n:0,paid:null!==(r=null==i?void 0:i.toFixed(2))&&void 0!==r?r:0,payment_method:e.paymentMethod}})(e):(0,C.Kv)(e))}),[e]),!P||!e)return r.createElement(l.aN,{title:b("Order.Payment.Loader")});const O=new Ie.pD(e.id,n),{total:S,pending:w,paid:N,payment_method:x}=P,k={price_value:Number(w),type:"debit",payment_method:null!=x?x:void 0,description:`Booked By '${v.username}'`,currency:null==e?void 0:e.currency};return r.createElement(or,null,r.createElement("div",{className:"content"},r.createElement(J.Z,{className:"select-container",align:"middle",gutter:16,wrap:!1},r.createElement(te.Z,null,r.createElement(re.Z,{type:"primary",onClick:()=>{Z((e=>!e))},disabled:h},r.createElement(H.Z,null),r.createElement("span",null,b("Order.Payment.BookPayment")))),r.createElement(ue.Z,{type:"vertical"}),r.createElement(te.Z,null,r.createElement(ne.Z.Text,null,b("Global.Total")," ",r.createElement(ne.Z.Text,{type:"success"},(0,g.v3)(null!==(o=null===(i=null==e?void 0:e.currency)||void 0===i?void 0:i.iso3)&&void 0!==o?o:"EUR",Number(S))))),r.createElement(ue.Z,{type:"vertical"}),r.createElement(te.Z,null,r.createElement(ne.Z,null,b("Global.Pending")," ",r.createElement(ne.Z.Text,{type:"danger"},(0,g.v3)(null!==(s=null===(d=null==e?void 0:e.currency)||void 0===d?void 0:d.iso3)&&void 0!==s?s:"EUR",Number(w))))),r.createElement(ue.Z,{type:"vertical"}),r.createElement(te.Z,null,r.createElement(ne.Z,null,b("Global.Paid")," ",r.createElement(ne.Z.Text,{type:"danger"},(0,g.v3)(null!==(u=null===(m=null==e?void 0:e.currency)||void 0===m?void 0:m.iso3)&&void 0!==u?u:"EUR",Number(N)))))),r.createElement(J.Z,null,r.createElement(ee.Z,{span:24},r.createElement(te.Z,{direction:"vertical",className:"table-container"},r.createElement(ae.Z,{dataSource:t,columns:O.tableColumns}))))),f&&!h&&r.createElement(lr,{id:e.id,isCredit:"credit"===n,module:O,onCallback:()=>{Z(!1),a(c.t.Payment)},singleData:k,isVisible:f,setVisible:Z}))};const or=b.ZP.div`
  & .content {
    border-radius: 4px;
    box-shadow: 0 0 10px #ebede7;
    padding: 12px;
    & .select-container {
      padding: 5px;
      & .ant-select {
        outline: none;
        margin-left: 3px;
      }
    }
    & .ant-table {
      & th.ant-table-cell {
        color: #fff;
        background: #4a5161;
      }

      & tr {
        &:nth-child(odd) {
          & td.ant-table-cell {
            background: #fbfbfb;
          }
        }

        &:nth-child(even) {
          & td.ant-table-cell {
            background: #f2f2f2;
          }
        }
      }
      & .action-btn {
        color: #4474e7;
      }
    }

    & .action-select {
      min-width: 12vw;
    }
  }
  .table-container {
    width: 100%;
  }
`;var dr=n(39653),sr=n(19053),cr=n(29819),mr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var ur=e=>{var t,n,a,l,{index:i}=e,o=e.order,{grossPrice:d,orderId:s,productVariation:c,productId:m,quantity:u,updatedAt:v,vat:b,weight:y,iso3:f}=o,Z=mr(o,["grossPrice","orderId","productVariation","productId","quantity","updatedAt","vat","weight","iso3"]),{moduleType:P,isComponent:_,isFromOutside:O=!1,shownParentId:S,isBundle:w,isShown:N,bookmarkItem:x,showComponents:k}=e;const{t:T}=(0,E.$)(),{profile:{roles:C},loggedInUserRole:I}=(0,r.useContext)(p.Vo),D=!!C.find((e=>"partner"===e.slug));return r.createElement(vr,{isShown:"credit"===P||w||N,isComponent:_},r.createElement(pr,{isComponent:_},O?r.createElement(J.Z,null,r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",null,r.createElement("p",null,m?r.createElement(h.rU,{to:D?`${p.Xb.SHOP_URL}/products/detail/${m}`:`/admin/products/manage/${m}`},c.number):c.number),r.createElement("p",null,m?r.createElement(h.rU,{to:D?`${p.Xb.SHOP_URL}/products/detail/${m}/${c.id}`:`/admin/products/manage/${m}/${c.id}`},c.id):c.id),r.createElement("p",null,s)))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,u))),r.createElement(ee.Z,{span:9,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",{className:"items"},r.createElement("div",{className:"alert"},c.name),r.createElement("div",{className:"item"},r.createElement("strong",null,T("Order.Titles.Updated"),":")," ",r.createElement("span",null,v?(0,g.Wb)(v):"-")),r.createElement("div",{className:"item"},r.createElement("strong",null,T("Order.Titles.ShippingProfile"),":")," ",r.createElement("span",null,c.shippingName)),r.createElement("div",{className:"item"},r.createElement("strong",null,T("Order.Titles.DeliveryDate"),":")," ",r.createElement("span",null,c.deliveryDate?(0,g.Wb)(c.deliveryDate):"-"))))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,(0,g.Xl)(y))))):r.createElement(J.Z,null,r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",null,r.createElement("p",null,m&&"partner"!==I?r.createElement(h.rU,{to:`/admin/products/manage/${m}`},c.number):c.number),r.createElement("p",null,m&&"partner"!==I?r.createElement(h.rU,{to:`/admin/products/manage/${m}/${c.id}`},c.id):c.id),r.createElement("p",null,s)))),r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,u))),r.createElement(ee.Z,{span:"purchase"===P?8:6,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",{className:"items"},r.createElement("div",{className:"alert"},c.name),r.createElement("div",{className:"item"},r.createElement("strong",null,T("Order.Titles.Updated"),":")," ",r.createElement("span",null,v?(0,g.Wb)(v):"-")),r.createElement("div",{className:"item"},r.createElement("strong",null,T("Order.Titles.ShippingProfile"),":")," ",r.createElement("span",null,c.shippingName)),r.createElement("div",{className:"item"},r.createElement("strong",null,T("Order.Titles.DeliveryDate"),":")," ",r.createElement("span",null,c.deliveryDate?(0,g.Wb)(c.deliveryDate):"-"))))),r.createElement(ee.Z,{span:"credit"===P?3:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",{className:"price"},r.createElement("strong",null,(0,g.v3)(f,null!=d?d:0))))),r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,(0,g.Xl)(y)))),r.createElement(ee.Z,{span:1,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,null!==(t=null==b?void 0:b.value)&&void 0!==t?t:"0","%"))),"purchase"!==P&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,(0,g.Xu)(null!==(n=Z.percentageOfProvision)&&void 0!==n?n:0)))),r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("strong",null,(0,g.v3)(f,null!==(a=Z.provisionPrice)&&void 0!==a?a:0))))),"purchase"===P&&r.createElement(ee.Z,{span:3,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement(te.Z,{direction:"vertical"},r.createElement(Zt.Z,{title:T("Order.BookItem")},r.createElement(re.Z,{disabled:D,ghost:!0,type:"primary",icon:r.createElement(cr.Z,null),onClick:()=>{var e;return x(null!==(e=null==c?void 0:c.id)&&void 0!==e?e:m)}})))))),"credit"!==P&&w&&r.createElement(J.Z,{align:"bottom",justify:"end"},r.createElement(Er,{isOpened:s===S,onClick:()=>null==k?void 0:k(s,i)},"Show Components ",S===s?r.createElement(dr.Z,null):r.createElement(sr.Z,null))),"credit"!==P&&!w&&16===(null===(l=Z.orderPositionType)||void 0===l?void 0:l.id)&&r.createElement(br,null,"Promotional Article")))};const pr=b.ZP.div`
  padding: 16px;
  background-color: ${({isComponent:e})=>e?"#e8f5e9":""};

  & .content {
    padding-left: 8px;
    padding-right: 4px;

    & .inner {
      height: 100%;

      & .action-btn {
        color: #2b7bb2;
      }
    }

    & .items {
      width: 100%;
      & .tag-item {
        margin-top: 20px;
      }

      & .item {
        padding: 4px 0;
      }

      & .alert {
        background: #c9e9ff;
        padding: 8px 12px;
        position: relative;
        margin-bottom: 8px;
        width: 100%;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #2b7bb2;
        }
      }
    }

    & .price {
      & .info {
        margin-bottom: 16px;
      }

      & .price {
        color: #2b7bb2;
      }
    }
  }

  & .table_title {
    margin-top: 4px;
  }

  & .row_item {
    padding: 8px 12px;
    border: 1px solid #e4e4eb;
    margin-bottom: 4px;
    min-height: 6vh;
    justify-content: center;
    align-items: center;
  }

  & .row_item .ant-form-item,
  & .row_item .tab_title {
    margin: 0 !important;
  }

  & .row_item.first {
    background: #f2f2f2;
  }

  & .product-variation-id-container {
    display: flex;
    align-items: center;
    justify-content: right;

    & > * {
      color: #1a8a1a;
      font-size: 12px;
    }
  }
`,vr=b.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${e=>e.isShown?"block":"none"};
  border-bottom: ${e=>e.isComponent?" 2px dashed #43a047":"0"};
`,Er=b.ZP.div`
  background-color: #e8f5e9;
  border: 2px solid;
  border-bottom-style: dashed;
  border-bottom-color: ${e=>e.isOpened?"#e8f5e9":"#43a047"};
  border-top-left-radius: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 164px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  color: #1a8a1a;
  cursor: pointer;
`,br=b.ZP.div`
  background-color: #c200a2;
  border: 2px solid;
  border-bottom-style: dashed;
  border-bottom-color: #c200a2;
  border-top-left-radius: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 164px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  color: #fff;
`;var gr=n(41136),yr=(n(33533),n(54471)),hr=n(31366),fr=n(40416),Zr=n(2365),Pr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var _r=({onSubmit:e,isPending:t,hasVariation:n})=>{const{t:a}=(0,E.$)(),[i]=ce.Z.useForm(),[o]=(0,Zn.KO)(yr.J),d=(0,r.useContext)(p.Vo);(0,r.useEffect)((()=>{const e=d.profile.country.currency;s(e)}),[d]);const s=e=>{const t=i.getFieldsValue(),{items:n}=t,r=Pr(t,["items"]),a=Pr(n[0],[]),l=Object.assign({items:[Object.assign(Object.assign({},a),{exchange_rate:null==e?void 0:e.ratio,currency:e})]},r);i.setFieldsValue(l)};return r.createElement(Or,null,r.createElement(Sr,{form:i,colspace:8,colon:!1,labelAlign:"left",layout:"horizontal",onFinish:t=>{null==e||e({data:t,form:i})},name:"stock-incoming-items",labelCol:{xs:{span:8}},wrapperCol:{xs:{span:16}},initialValues:{items:[{exchange_rate:1}]}},r.createElement(r.Suspense,{fallback:r.createElement(l.aN,null)},r.createElement(J.Z,{justify:"space-between"},r.createElement(ee.Z,{xs:24,lg:12,className:"leftCol"},r.createElement("div",{className:"box-container"},o&&r.createElement(Zr.Z,{message:`${a("Stock.Setting.WarehouseId")} : ${o} `,type:"info"}),!n&&r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.ProductVariation"),name:["items",0,"product_variation"],rules:[{required:!0}]},r.createElement(hr.Z,null)),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.DeliveryDate"),name:"delivery_date"},r.createElement(ft.Z,{format:(0,g._A)(),placeholder:a("Global.SelectPlaceholder",{title:a("Stock.IncomingItems.DeliveryDate")})})),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.DeliveryNote"),name:"description",rules:[{required:!0}]},r.createElement(me.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Stock.IncomingItems.DeliveryNote")})})),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.UploadDeliveryNote"),name:"file"},r.createElement(l.gq,{form:i})),r.createElement(ce.Z.Item,{hidden:!0,name:"file_id"},r.createElement(r.Fragment,null)),r.createElement(r.Suspense,{fallback:(0,nr.Z)(a("Stock.IncomingItems.Supplier"))},r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.Supplier"),name:["items",0,"supplier"]},r.createElement(fr.L,null))))),r.createElement(ee.Z,{xs:24,lg:12,className:"rightCol"},r.createElement("div",{className:"box-container"},r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.Reason"),name:"reason",rules:[{required:!0}]},r.createElement(Ct.Z,{showSearch:!0,placeholder:a("Global.SelectPlaceholder",{title:a("Stock.IncomingItems.Reason")}),options:[{label:a("Order.Purchase.Incoming"),value:"Incoming"},{label:a("Order.Purchase.StockCorrection"),value:"Stock correction"},{label:a("Order.Purchase.CorrectionStocktaking"),value:"Stock correction because of stocktaking"},{label:a("Order.Purchase.CorrectionManufacturerError"),value:"Stock correction because of manufacturer error"},{label:a("Order.Purchase.CorrectionMaculature"),value:"Stock correction because of maculature"},{label:a("Order.Purchase.CorrectionPackingError"),value:"Stock correction because of packing error"},{label:a("Order.Purchase.CorrectionDamage"),value:"Stock correction because of damage"},{label:a("Order.Purchase.CorrectionInternalOffset"),value:"Stock correction (internal offset)"},{label:a("Order.Purchase.CorrectionBBD"),value:"Stock correction because of BBD"},{label:a("Order.Purchase.CorrectionShippingItemsToFBA"),value:"Stock correction because of shipping items to FBA"},{label:a("Order.Purchase.CorrectionShippingItemsToFulfilment"),value:"Stock correction because of shipping items to fulfilment service provider"},{label:a("Order.Purchase.CorrectionSampleForInterestedParties"),value:"Stock correction because of sample for interested parties"},{label:a("Order.Purchase.CorrectionSampleForCustomers"),value:"Stock correction because of sample for customers"},{label:a("Order.Purchase.CorrectionSample"),value:"Stock correction because of sample"},{label:a("Order.Purchase.CorrectionBookedIn"),value:"Stock correction because quality models are booked in"},{label:a("Order.Purchase.CorrectionBookedOut"),value:"Stock correction because quality models are booked out"},{label:a("Order.Purchase.CorrectionGift"),value:"Stock correction because of gift"},{label:a("Order.Purchase.CorrectionMalfunctionWithoutReturn"),value:"Stock correction because of malfunction (without return)"},{label:a("Order.Purchase.CorrectionLoss"),value:"Correct stock because of loss"},{label:a("Order.Purchase.CorrectionOwnUse"),value:"Stock correction because of own use"}]})),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.Quantity"),name:["items",0,"quantity"],rules:[{required:!0}]},r.createElement(ve.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Stock.IncomingItems.Quantity")}),min:0})),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.EXP"),name:["items",0,"expire_date"]},r.createElement(ft.Z,{format:(0,g._A)(),placeholder:a("Global.InputPlaceholder",{title:a("Stock.IncomingItems.EXP")})})),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.Batch"),name:["items",0,"batch"]},r.createElement(me.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Stock.IncomingItems.Batch")})})),r.createElement(r.Suspense,{fallback:(0,nr.Z)(a("Stock.IncomingItems.Currency"))},r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.Currency"),name:["items",0,"currency"],rules:[{required:!0}]},r.createElement(er.V,{fetchAll:!0,menuPlacement:"top",onChange:s}))),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.ExchangeRate"),name:["items",0,"exchange_rate"],rules:[{required:!0}]},r.createElement(ve.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Stock.IncomingItems.ExchangeRate")}),min:0})),r.createElement(ce.Z.Item,{label:a("Stock.IncomingItems.PurchasePrice"),name:["items",0,"purchase_price"]},r.createElement(ve.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Stock.IncomingItems.PurchasePrice")}),min:0}))))),r.createElement(l.Ow,{isPending:t,title:a("Stock.IncomingItems.BookIncomingItems"),icon:r.createElement(gr.Z,null)}))))};const Or=b.ZP.div`
  .vatInput {
    display: flex;
    justify-content: space-between;
  }
`,Sr=(0,b.ZP)(ce.Z)`
  .ant-form-item {
    margin-bottom: 0;
    padding: 12px 12px 24px 12px;

    justify-content: space-between;

    :nth-child(even) {
      background-color: #fbfbfb;
    }
    :nth-child(odd) {
      background-color: rgb(242, 242, 242);
    }
  }

  .ant-form-item-control-input {
    height: auto;
    display: flex;
    align-items: center;
  }

  .ant-form-item-label {
    white-space: normal;
    display: flex;
    align-items: center;

    & > label {
      height: auto;
    }
  }

  /* TODO: See if we can remove these paddings */
  .leftCol {
    padding-right: ${e=>e.colspace}px;
  }
  .rightCol {
    padding-left: ${e=>e.colspace}px;
  }

  .header-margin {
    margin-top: 1em;
  }

  .box-container {
    padding: 20px;
    border: 1px solid #f2f2f2;
    margin: 10px;
    border-radius: 3px;
  }

  .header {
    background-color: green;
  }
`;var wr=n(24912),Nr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var xr=({variationId:e,orderId:t,visible:n,setVisible:a})=>{const{t:i}=(0,E.$)(),{mutate:o,isLoading:d}=(0,Jn.useMutation)(wr.M),s=()=>{a(!1)};return r.createElement(Yn.Z,{visible:n,width:1300,footer:!1,destroyOnClose:!0,closable:!1,onCancel:s,title:r.createElement(l.xB,{onClose:s,items:[{path:"",breadcrumbName:i("Global.CreateTitle",{title:"Incoming Items"})}]})},r.createElement(_r,{isPending:d,onSubmit:({data:n,form:r})=>{const{items:a,delivery_date:l}=n,i=Nr(n,["items","delivery_date"]),d=l?ut()(l).format("YYYY-MM-DD"):"",c=a[0],{currency:m,supplier:u,product_variation:p,expire_date:v}=c,E=Nr(c,["currency","supplier","product_variation","expire_date"]),b=v?ut()(v).format("YYYY-MM-DD"):"",g=[Object.assign({currency_id:null==m?void 0:m.id,supplier_id:null==u?void 0:u.id,product_variation_id:null!=e?e:null==p?void 0:p.id,expire_date:b},E)],y=Object.assign(Object.assign({items:g},i),{order_id:t,order_type:"OrderPurchase",delivery_date:d});o(y,{onSuccess:()=>{r.resetFields(),s()}})},hasVariation:!!e}))};const kr=({positions:e,orderId:t,isFromOutside:n=!1,moduleType:a})=>{const{t:l}=(0,E.$)(),{profile:{roles:i}}=(0,r.useContext)(p.Vo),o=!!i.find((e=>"partner"===e.slug)),[d,s]=(0,r.useState)(e),[c,m]=(0,r.useState)(-1),[u,v]=(0,r.useState)(-1),b="credit"!==a;(0,r.useEffect)((()=>{s(e)}),[e]);const g=(t,n)=>{if(t===c)s(e),m(-1);else{const r=e.filter((e=>{var n;return(null===(n=e)||void 0===n?void 0:n.parentId)===t}));s((e=>(e=e.filter((e=>{var t;return 3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})),[...e.slice(0,n+1),...r,...e.slice(n+1)]))),m(t)}};return r.createElement(r.Fragment,null,n?r.createElement(J.Z,{className:"header"},r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Item")))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Quantity")))),r.createElement(ee.Z,{span:9,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.ItemText")," "))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Weight")," ")))):r.createElement(J.Z,{className:"header"},r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Item")))),r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Quantity")))),r.createElement(ee.Z,{span:"purchase"===a?8:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.ItemText")," "))),r.createElement(ee.Z,{span:b?2:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.PriceBracketGross")))),r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Weight")," "))),r.createElement(ee.Z,{span:1,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.Vat")," "))),"purchase"!==a&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.POP")))),r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Order.Position.ProvisionPrice"))))),"purchase"===a&&r.createElement(ee.Z,{span:3,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,l("Global.Action"))))),r.createElement(te.Z,{direction:"vertical",className:"positions",style:{paddingBlock:"0",gap:"0"}},(()=>{var e;let t=0;return null===(e="credit"===a||"purchase"===a||"partner"===a?d:-1===c?d.filter((e=>{var t;return 3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})):d.filter((e=>{var t;return 3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)||e.parentId===c})))||void 0===e?void 0:e.map((e=>{var l,i,o,d,s,m,u;return r.createElement(ur,{isFromOutside:n,isComponent:"purchase"!==a&&b&&3===(null===(l=e.orderPositionType)||void 0===l?void 0:l.id),shownParentId:c,index:b&&3===(null===(i=e.orderPositionType)||void 0===i?void 0:i.id)?t:t++,key:e.orderId,order:e,moduleType:a,isBundle:"credit"!==a&&2===(null===(o=e.orderPositionType)||void 0===o?void 0:o.id),isShown:"purchase"===a||b&&(3===(null===(d=e.orderPositionType)||void 0===d?void 0:d.id)&&e.parentId===c||1===(null===(s=e.orderPositionType)||void 0===s?void 0:s.id)||16===(null===(m=e.orderPositionType)||void 0===m?void 0:m.id)||18===(null===(u=e.orderPositionType)||void 0===u?void 0:u.id)),editDeliveredQuantity:e=>{v(e)},bookmarkItem:e=>{v({varId:e})},showComponents:g})}))})()),"purchase"===a&&!o&&r.createElement(xr,{orderId:t,variationId:u.varId,visible:"number"!=typeof u,setVisible:e=>v(e?u:-1)}))};var Tr=n(77523),Cr=(n(33699),n(17021));var Ir=e=>r.createElement(l.LE,Object.assign({hasNew:!1,searchParam:"search",module:new Cr.Dn,optionSelector:{label:"name",value:"id"},query:{productVariationId:e.productVariationId},getCustomLabelProperty:e=>`${e.name} `},e));var Dr=({order:e,symbolName:t,name:n,index:a,moduleType:l,isBundle:i,version:o,isComponent:d,fieldKey:s,form:c,remove:m,disconnect:u})=>{var p,v,b,y,h,f,Z,P,_,O;const{t:S}=(0,E.$)(),[w]=(0,r.useState)(null!==(p=e.discount)&&void 0!==p?p:0),[N,x]=(0,r.useState)(null!==(v=e.singleNetPrice)&&void 0!==v?v:0),[k,T]=(0,r.useState)(null!==(b=e.singleGrossPrice)&&void 0!==b?b:0),[C]=(0,r.useState)(null!==(h=null===(y=e.vat)||void 0===y?void 0:y.value)&&void 0!==h?h:0),[I,D]=(0,r.useState)("none");return(0,r.useEffect)((()=>{const e=c.getFieldsValue(!0).data;c.setFieldsValue({data:e.map((e=>{var t,n,r,a;return Object.assign(Object.assign({},e),{net_price:Number(null!==(n=null===(t=e.singleNetPrice)||void 0===t?void 0:t.toFixed(2))&&void 0!==n?n:0),gross_price:Number(null!==(a=null===(r=e.singleGrossPrice)||void 0===r?void 0:r.toFixed(2))&&void 0!==a?a:0)})}))})}),[o]),(0,r.useEffect)((()=>{if(N&&k){const e=c.getFieldsValue(!0).data;c.setFieldsValue({data:e.map(((e,t)=>{var n,r;return t===a?Object.assign(Object.assign({},e),{net_price:Number(null!==(n=null==N?void 0:N.toFixed(2))&&void 0!==n?n:0),gross_price:Number(null!==(r=null==k?void 0:k.toFixed(2))&&void 0!==r?r:0)}):e}))})}}),[k,N]),r.createElement(Fr,{isShown:!0,isComponent:d},r.createElement(Vr,{isComponent:d},r.createElement(J.Z,null,r.createElement(ee.Z,{span:2,className:"content"},r.createElement(J.Z,{className:"inner",align:"middle"},r.createElement("div",null,r.createElement("p",null,e.orderId)))),r.createElement(ce.Z.Item,{name:[n,"orderId"],fieldKey:[s,"orderId"],hidden:!0},r.createElement(me.Z,null)),r.createElement(ee.Z,{span:4,className:"content"},r.createElement(J.Z,{className:"row_item first",align:"top"},r.createElement(ce.Z.Item,{name:[n,"quantity"],fieldKey:[s,"quantity"],label:r.createElement("strong",null,S("Global.Quantity")),initialValue:null!==(f=e.quantity)&&void 0!==f?f:1,rules:[{required:!0}]},r.createElement(ve.Z,{min:1,disabled:d||"orderPositionType"in e&&"Promotional Article"===(null===(Z=null==e?void 0:e.orderPositionType)||void 0===Z?void 0:Z.name)})))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:[n,"productVariation","name"],fieldKey:[s,"productVariation","name"],rules:[{required:!0}],initialValue:null!==(_=null===(P=e.productVariation)||void 0===P?void 0:P.name)&&void 0!==_?_:""},r.createElement(me.Z.TextArea,{disabled:d,style:{minHeight:"100px"},placeholder:S("Global.InputPlaceholder",{title:S("Global.Name")})}))),r.createElement(ee.Z,{span:12,className:"delivery-date-container"},r.createElement("strong",{className:"table_title"},S("Order.Field.DeliveryDate"),": ")),r.createElement(ee.Z,{span:12},"credit"===l?r.createElement(ce.Z.Item,{name:[n,"estimate_delivery_date"],fieldKey:[s,"estimate_delivery_date"],style:{marginBottom:"2px"},rules:[{required:!0}]},r.createElement(ft.Z,{format:(0,g._A)()})):r.createElement(ce.Z.Item,{name:[n,"estimate_delivery_date"],fieldKey:[s,"estimate_delivery_date"],style:{marginBottom:"2px"},rules:[{required:"subscription"!==l}]},r.createElement(ft.Z,{format:(0,g._A)(),disabled:"subscription"===l}))),r.createElement("br",null),"credit"!==l&&"subscription"!==l&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:12},r.createElement("strong",{className:"table_title"},S("Order.Field.StorageVariation"),": ")),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{style:{marginBottom:"2px"},name:[n,"storageVariation"],fieldKey:[s,"storageVariation"]},r.createElement(Ir,{menuPlacement:"top",productVariationId:null===(O=null==e?void 0:e.productVariation)||void 0===O?void 0:O.id})))),"subscription"!==l&&r.createElement(ee.Z,{span:24,className:"product-variation-id-container"},r.createElement("span",null,S("Order.Position.VariationId"),": ",r.createElement("span",null,e.productVariation.id))))),r.createElement(ee.Z,{span:6,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item first"},r.createElement(ee.Z,{span:8,className:"table_title"},r.createElement("strong",null,S("Order.Position.PriceBracketGross")," ")),r.createElement(ee.Z,{span:8},r.createElement(ce.Z.Item,{name:[n,"gross_price"],fieldKey:[s,"gross_price"],rules:[{required:!0}]},r.createElement(ve.Z,{min:0,disabled:d,onChange:e=>{const t=Number(e);x(Number((t/(1+w/100)/(1+C/100)).toFixed(2))),T(t)},onStep:e=>{const t=Number(e);x(Number((t/(1+w/100)/(1+C/100)).toFixed(2))),T(t)}}))),r.createElement(ee.Z,{span:1}),r.createElement(ee.Z,{span:7,className:"table_title"},t))),r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:8,className:"table_title"},r.createElement("strong",null,S("Order.Position.PriceBracketNet")," ")),r.createElement(ee.Z,{span:8},r.createElement(ce.Z.Item,{name:[n,"net_price"],fieldKey:[s,"net_price"],rules:[{required:!0}]},r.createElement(ve.Z,{min:0,disabled:d,onChange:e=>{const t=Number(e);T(Number((t*(1+w/100)*(1+C/100)).toFixed(2))),x(t)},onStep:e=>{const t=Number(e);T(Number((t*(1+w/100)*(1+C/100)).toFixed(2))),x(t)}}))),r.createElement(ee.Z,{span:1}),r.createElement(ee.Z,{span:7,className:"table_title"},t))),!1)),r.createElement(ee.Z,{span:5,className:"content"},r.createElement(J.Z,{className:"item",align:"top"},r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:10,className:"table_title"},r.createElement("strong",null,S("Order.Position.Vat"),": ")),r.createElement(ee.Z,{span:14},r.createElement(r.Suspense,{fallback:(0,nr.Z)("vat")},r.createElement(ce.Z.Item,{name:[n,"vat"],fieldKey:[s,"vat"],rules:[{required:!0}]},r.createElement(In,{module:l,validFromDate:e.createdAt})))))),r.createElement(ee.Z,{span:24},r.createElement(J.Z,{className:"row_item"},r.createElement(ee.Z,{span:10},r.createElement("strong",{className:"table_title"},S("Global.UpdatedAt"),": ")),r.createElement(ee.Z,{span:14},r.createElement(Gr,null,e.updatedAt?(0,g.Wb)(new Date(e.updatedAt)):" - ")))))),!d&&r.createElement(ee.Z,{span:1,className:"content"},r.createElement(te.Z,{direction:"vertical"},r.createElement(Zt.Z,{title:S("Order.CopyPosition")},r.createElement(re.Z,{ghost:!0,type:"primary",icon:r.createElement(kt.Z,null),disabled:!0})),r.createElement(Zt.Z,{title:S("Order.RemovePosition")},r.createElement(re.Z,{ghost:!0,type:"primary",icon:r.createElement(An.Z,null),onClick:()=>{var t;D("remove"),m(null!==(t=e.orderId)&&void 0!==t?t:-1,(()=>D("none")))},loading:"remove"===I})),i&&"purchase"!==l&&r.createElement(Zt.Z,{title:S("Order.Position.Disconnect")},r.createElement(re.Z,{ghost:!0,type:"primary",icon:r.createElement(Tr.Z,null),onClick:()=>{var t;D("disconnect"),u(null!==(t=e.orderId)&&void 0!==t?t:-1,(()=>D("none")))},loading:"disconnect"===I})))))))};const Vr=b.ZP.div`
  padding: 16px;
  background-color: ${({isComponent:e})=>e?"#e8f5e9":""};

  & .content {
    padding-left: 8px;
    padding-right: 4px;

    & .inner {
      height: 100%;

      & .action-btn {
        color: #2b7bb2;
      }
    }

    & .items {
      width: 100%;
      & .tag-item {
        margin-top: 20px;
      }

      & .item {
        padding: 4px 0;
      }

      & .alert {
        background: #c9e9ff;
        padding: 8px 12px;
        position: relative;
        margin-bottom: 8px;
        width: 100%;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: #2b7bb2;
        }
      }
    }

    & .price-gross {
      & .info {
        margin-bottom: 16px;
      }

      & .price {
        color: #2b7bb2;
      }
    }
  }

  & .table_title {
    margin-top: 4px;
  }

  & .row_item {
    padding: 8px 12px;
    border: 1px solid #e4e4eb;
    margin-bottom: 4px;
    min-height: 6vh;
    justify-content: center;
    align-items: center;
  }

  & .row_item .ant-form-item,
  & .row_item .tab_title {
    margin: 0 !important;
  }

  & .row_item.first {
    background: #f2f2f2;
  }

  & .product-variation-id-container {
    display: flex;
    align-items: center;
    justify-content: right;

    & > * {
      color: #30e030;
      font-size: 12px;
    }
  }

  & .delivery-date-container {
    display: flex;
    align-items: flex-start;
  }
`,Fr=b.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${e=>e.isComponent?"none":"block"};
  border-bottom: ${e=>e.isComponent?" 2px dashed #43a047":"0"};
`,Gr=b.ZP.strong`
  margin-bottom: 4px;
`,Ar=({symbolName:e,orderSaleId:t,moduleType:n,positions:a,editOrderSalePosition:i,removeOrderSalePosition:o,disconnectOrderSalePosition:d})=>{const[s]=ce.Z.useForm(),{t:c}=(0,E.$)(),[m,u]=(0,r.useState)(!1),[p,v]=(0,r.useState)(!1),[b,g]=(0,r.useState)(a);return(0,r.useEffect)((()=>{g("credit"===n?[...a].map((e=>Object.assign(Object.assign({},e),{estimate_delivery_date:e.productVariation.deliveryDate?ut()(e.productVariation.deliveryDate):void 0}))):[...a].map((e=>Object.assign(Object.assign({},e),{estimate_delivery_date:e.estimatedDeliveryDate?ut()(e.estimatedDeliveryDate):void 0}))).filter((e=>{var t;return"purchase"===n||3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})))}),[a]),(0,r.useEffect)((()=>{s.setFieldsValue({data:b})}),[b]),(0,r.useEffect)((()=>{u((e=>!e))}),[b]),r.createElement(r.Fragment,null,r.createElement(J.Z,{className:"header"},r.createElement(ee.Z,{span:2,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,c("Global.ID")))),r.createElement(ee.Z,{span:4,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,c("Global.Quantity")))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,c("Global.Details")," "))),r.createElement(ee.Z,{span:6,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,c("Order.Position.Price_Discount")))),r.createElement(ee.Z,{span:5,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,c("Order.Position.Vat")))),r.createElement(ee.Z,{span:1,className:"title"},r.createElement(J.Z,{align:"middle"},r.createElement("span",null,c("Global.Action"))))),r.createElement(te.Z,{direction:"vertical",className:"positions",style:{paddingRight:"16px"}},r.createElement(ce.Z,{form:s,layout:"horizontal",onFinish:({data:e})=>{const r=e.find((e=>{var t;return new Date(e.estimate_delivery_date)<new Date(null===(t=b.filter((t=>t.orderId===e.orderId)))||void 0===t?void 0:t[0].createdAt)}));if(r)Pe.ZP.error(c("Order.Position.EditDateError"));else if(v(!0),"credit"===n||"purchase"===n){const n=e.map((e=>{var t,n,r,a;return{id:e.orderId,name:null===(t=e.productVariation)||void 0===t?void 0:t.name,vat_value:e.vat.value,vat_id:e.vat.id,quantity:e.quantity,price_value:null!==(n=e.net_price)&&void 0!==n?n:0,estimate_delivery_date:e.estimate_delivery_date,storage_variation_id:null!==(a=null===(r=e.storageVariation)||void 0===r?void 0:r.id)&&void 0!==a?a:void 0}}));i(t,n,(()=>v(!1)))}else{const n=e.filter((e=>{var t;return 3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})).map((e=>{var t,n;return{id:e.orderId,name:null===(t=e.productVariation)||void 0===t?void 0:t.name,vat_value:e.vat.value,vat_id:e.vat.id,quantity:e.quantity,price_value:null!==(n=e.net_price)&&void 0!==n?n:0,estimate_delivery_date:e.estimate_delivery_date,storage_variation_id:e.storageVariation?e.storageVariation.id:void 0}}));i(t,n,(()=>v(!1)))}}},p?r.createElement(l.aN,null):r.createElement(ce.Z.List,{name:"data"},((t,{})=>r.createElement("div",{className:"form-list"},t.map((({key:t,name:a,fieldKey:l},i)=>{var c,u;return b[i]?r.createElement(r.Fragment,{key:t},r.createElement(Dr,{moduleType:n,version:m,key:t,name:a,fieldKey:l,symbolName:e,order:b[i],remove:o,disconnect:d,form:s,isComponent:"purchase"!==n&&("credit"!==n&&3===(null===(c=b[i].orderPositionType)||void 0===c?void 0:c.id)),index:i,isBundle:"credit"!==n&&("purchase"===n||2===(null===(u=b[i].orderPositionType)||void 0===u?void 0:u.id))})):null}))))),r.createElement(l.Ow,{title:c("Global.Save"),isPending:p}))))},{TabPane:Lr}=v.Z,Rr=({positions:e})=>({credit:e,"order-sale":e,purchase:e,subscription:e}),jr=b.ZP.div`
  padding: 16px 0;

  & .tabs {
    padding-bottom: 16px;

    & button {
      min-width: 200px;
    }
  }

  & .positions {
    width: 100%;
    padding-block: 8px;

    & .ant-space-item {
      &:nth-child(odd) {
        background: #fbfbfb;
      }

      &:nth-child(even) {
        background: #f2f2f2;
      }
    }
  }
`,$r=b.ZP.div`
  border-radius: 12px;
  background: #fff;

  & .header {
    border-radius: ${e=>e.isHeader?"12px 12px 0 0":"0"};
    background: #4a5161;
    color: #fff;
    padding: 16px;
    height: 80px;
    font-size: 0.874rem;
    font-weight: 500;

    & .title {
      height: 100%;

      & .ant-row {
        height: 100%;
        padding-inline: 6px;
      }
    }
  }
`,qr=b.ZP.div`
  margin-top: 20px;
  width: 100%;
  & .ant-tabs-nav {
    margin-bottom: 0px;
  }
  & .order-tabs .ant-tabs-nav-list {
    margin-left: 0;
    & .ant-tabs-tab {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    & .ant-tabs-tab-btn {
      padding: 0px 28px;
      min-width: 18vh;
      text-align: center;
      font-weight: 500;
    }
    & .ant-tabs-tab-active {
      background-color: #009ddc;
      & .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
`;var Ur=({orderSale:e,moduleType:t,updateTab:n})=>{var i,o,d,s,m;const{t:u}=(0,E.$)(),{profile:{roles:b,partner:g},role:y}=(0,r.useContext)(p.Vo),h=!!b.find((e=>"partner"===e.slug)),f=(0,a.s0)(),P=new Ie.E7(((t,n,r)=>{var a;return N(t,n,null!==(a=null==e?void 0:e.id)&&void 0!==a?a:-1,r)})),[_,O]=(0,r.useState)([]);if((0,r.useEffect)((()=>{e&&O({"order-sale":(0,C.fB)(e),credit:x(e),subscription:W(e),purchase:R(e)}[t])}),[e]),!e)return r.createElement(l.aN,{title:u("Order.Position.Loader")});const S={"order-sale":e,credit:e.order,subscription:e,purchase:e,partner:e}[t],w={credit:e.orderCreditNotePositions,"order-sale":e.orderSalePositions,subscription:e.positions,purchase:e.orderPurchasePositions}[t],N=(r,a,l,i)=>{(null==e?void 0:e.is_editable)?"purchase"===t?(0,I.xw)(l,{product_variation_id:r,quantity:a}).then((()=>n(c.t.Overview))).finally((()=>i())):"order-sale"===t?(0,ie.nr)(l,{product_variation_id:r,quantity:a}).then((()=>n(c.t.Overview))).finally((()=>i())):"subscription"===t&&(0,D.TJ)(l,{product_variation_id:r,quantity:a}).then((()=>n(c.t.Overview))).finally((()=>i())):(Pe.ZP.error(u("Order.Position.AddError")),i())};return r.createElement(qr,null,r.createElement(v.Z,{className:"order-tabs",defaultActiveKey:"1",type:"card"},r.createElement(Lr,{key:"1",tab:r.createElement("span",null,r.createElement(Y.Z,null),u("Order.Tab.StockUnit"))},r.createElement(jr,null,r.createElement($r,{isHeader:!0},r.createElement(kr,{orderId:null==e?void 0:e.id,positions:Rr({positions:_})[t],moduleType:t,updateTab:n})))),!h&&r.createElement(Lr,{key:"2",tab:r.createElement("span",null,r.createElement(fe.Z,null),u("Global.Edit"))},r.createElement(jr,null,r.createElement($r,{isHeader:!0},r.createElement(Ar,{moduleType:t,symbolName:null!==(o=null===(i=S.currency)||void 0===i?void 0:i.name)&&void 0!==o?o:" - ",orderSaleId:"credit"===t?e.id:S.id,positions:Rr({positions:_})[t],editOrderSalePosition:(r,a,l)=>{"credit"===t&&e.isEditable||(null==e?void 0:e.is_editable)?(0,C.W3)({id:r,positions:a.map((e=>Object.assign(Object.assign({},e),{estimate_delivery_date:e.estimate_delivery_date?new Date(e.estimate_delivery_date).toISOString().split("T")[0]:""})))},t).then((()=>n(c.t.All))).finally((()=>l())):(Pe.ZP.error(u("Order.Position.EditError")),l())},removeOrderSalePosition:(r,a)=>{var l,i,o,d;"credit"===t?(null!==(l=w.length)&&void 0!==l?l:0)>=2&&"credit"===t&&e.isEditable||(null==e?void 0:e.is_editable)?confirm(u("Order.Position.RemoveQuestion"))&&(0,Z.hR)(r).then((()=>n(c.t.Overview))).finally((()=>a())):(Pe.ZP.error(u("Order.Position.RemoveError")),a()):"order-sale"===t?(null==e?void 0:e.is_editable)&&(null!==(i=w.filter((e=>{var t;return e.productVariation&&3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})).length)&&void 0!==i?i:0)>=2?confirm(u("Order.Position.RemoveQuestion"))&&(0,ie.Oc)(r).then((()=>n(c.t.Overview))).finally((()=>a())):(Pe.ZP.error(u("Order.Position.RemoveError")),a()):"purchase"===t?(null==e?void 0:e.is_editable)&&(null!==(o=w.filter((e=>{var t;return e.productVariation&&3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})).length)&&void 0!==o?o:0)>=2?confirm(u("Order.Position.RemoveQuestion"))&&(0,I.ZA)(r).then((()=>n(c.t.Overview))).finally((()=>a())):(Pe.ZP.error(u("Order.Position.RemoveError")),a()):"subscription"===t&&((null==e?void 0:e.is_editable)&&(null!==(d=w.filter((e=>{var t;return e.productVariation&&3!==(null===(t=e.orderPositionType)||void 0===t?void 0:t.id)})).length)&&void 0!==d?d:0)>=2?confirm(u("Order.Position.RemoveQuestion"))&&(0,D.lC)(r).then((()=>n(c.t.Overview))).finally((()=>a())):(Pe.ZP.error(u("Order.Position.RemoveError")),a()))},disconnectOrderSalePosition:(t,r)=>{var a;(null==e?void 0:e.is_editable)&&(null!==(a=w.length)&&void 0!==a?a:0)>=2?confirm(u("Order.Position.DisconnectQuestion"))?(0,ie.rY)(t).then((()=>n(c.t.Overview))).catch((e=>{ct.Z.error(null==e?void 0:e.message),r()})).finally((()=>r())):r():(Pe.ZP.error(u("Order.Position.RemoveError")),r())}})))),"partner"!==y&&"credit"!==t&&(!h||(null==S?void 0:S.partner_id)===g.id)&&r.createElement(Lr,{key:"3",tab:r.createElement("span",null,r.createElement(H.Z,null),u("Global.Add"))},r.createElement(jr,null,r.createElement(l.Xg,{module:P},r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasSearch:!0,noDescription:!0,noListView:!0,dontNavigate:!0}),r.createElement(l.s_.ListView,{dontNavigate:!0,params:{isActive:!0,supplierId:"purchase"===t&&null!==(m=null===(s=null===(d=e)||void 0===d?void 0:d.supplier)||void 0===s?void 0:s.id)&&void 0!==m?m:void 0},tableScroll:{y:640,x:"max-content"},module:P,hasUpdate:!1,onUpdate:(e,t)=>{f("/admin/products/manage/"+t.product.id+"/"+e)}})))))))},Mr=n(96520),Kr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var zr=({module:e,visible:t,pending:n,onSubmit:a,setVisible:i})=>{const{t:o}=(0,E.$)(),d=e.title[0],[s]=ce.Z.useForm(),c=()=>{s.resetFields(),i(!1)};return r.createElement(de.Z,{visible:t,width:1300,footer:!1,destroyOnClose:!0,closable:!1,onCancel:c,title:r.createElement(oe.Z,{onClose:c,items:[...e.breadcrumbItems||[],{path:"",breadcrumbName:o("Global.CreateTitle",{title:d})}]})},r.createElement(ce.Z,{name:"receipt-upload-form",layout:"vertical",onFinish:e=>{const t=Object.assign({},e),{document_type:n}=t,r=Kr(t,["document_type"]);a(Object.assign(Object.assign({},r),{document_type_id:n.id}))},form:s},r.createElement(r.Suspense,{fallback:r.createElement(l.aN,null)},r.createElement(J.Z,{gutter:16},r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"number",label:o("Order.Field.Number")},r.createElement(me.Z,null))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"document_type",label:o("Order.Receipt.Field.DocumentType")},r.createElement(Mr.Z,null))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{label:o("Global.UploadFile"),name:"file"},r.createElement(l.gq,{form:s,valueName:"Receipt Upload"})),r.createElement(ce.Z.Item,{hidden:!0,name:"file_id"}))),r.createElement(l.Ow,{isPending:n}))))};var Wr=({onSubmit:e,isPending:t,moduleType:n})=>{const{t:a}=(0,E.$)();return r.createElement(ce.Z,{name:"order-receipts-form",layout:"vertical",onFinish:e,initialValues:"partner"!==n?{number:0,created_date:ut()(),bookOutGoingItem:"YES"}:{}},r.createElement(J.Z,{gutter:16},"partner"!==n&&r.createElement(r.Fragment,null,r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"created_date",label:a("Order.Receipt.Field.Dates")},r.createElement(ft.Z,{format:(0,g._A)()}))),r.createElement(ee.Z,{span:12},r.createElement(ce.Z.Item,{name:"ChangeOrderStatusTo",label:a("Order.Receipt.Field.ChangeOrderStatusTo")},r.createElement(l.LE,{hasNew:!1,maxItemsToShow:7,module:new Ie.Xq,optionSelector:{label:"name",value:"id"}}))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:"book-outgoing-item",label:a("Order.Receipt.Field.BookOutgoingItem")},r.createElement(Ct.Z,{options:[{label:a("Global.Yes"),value:"yes"},{label:a("Global.No"),value:"no"}]}))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:"number",label:a("Order.Receipt.Field.Number")},r.createElement(ve.Z,{disabled:!0})))),r.createElement(ee.Z,{span:24},r.createElement(ce.Z.Item,{name:"comment",label:a("Global.Comment")},r.createElement(me.Z,{placeholder:a("Global.InputPlaceholder",{title:a("Global.Comment")})})))),r.createElement(l.Ow,{isPending:t}))};var Br=({module:e,visible:t,pending:n,onSubmit:a,setVisible:l,moduleType:i,setSelectedValue:o})=>{const{t:d}=(0,E.$)(),s=e.title[0],c=()=>{o("default"),l(!1)};return r.createElement(de.Z,{visible:t,width:1300,footer:!1,destroyOnClose:!0,closable:!1,onCancel:c,title:r.createElement(oe.Z,{onClose:c,items:[...e.breadcrumbItems||[],{path:"",breadcrumbName:d("Global.CreateTitle",{title:s})}]})},r.createElement(Wr,{onSubmit:e=>{const t=Object.assign({},e);a(t)},isPending:n,moduleType:i}))},Xr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const{Option:Qr}=Ct.Z;var Hr=({orderSaleId:e,receipt:t,moduleType:n,updateTab:a})=>{const{t:i}=(0,E.$)(),o=new Ie.vZ(null!=e?e:"",n),{profile:{roles:d}}=(0,r.useContext)(p.Vo),s=!!d.find((e=>"partner"===e.slug));if(!t||!e)return r.createElement(l.aN,{title:i("Order.Receipt.Loader")});const[m,u]=(0,r.useState)(!1),[v,b]=(0,r.useState)(!1),[g,y]=(0,r.useState)(!1),[h,f]=(0,r.useState)("default"),Z=(e,r)=>{var l;if(e)"order-sale"===n&&(y(!0),(0,C.R_)(e,t.options.orderSaleId,{invoice_type:e}).then((e=>{window.open(p.Xb.PURE_URL+e),a(c.t.All)})).finally((()=>{y(!1),u(!1)})));else{const e=Xr(r,[]),i={invoice_type:h,OrderDocument:Object.assign({},e),order_status_id:null===(l=null==r?void 0:r.ChangeOrderStatusTo)||void 0===l?void 0:l.id};y(!0),"partner"===n&&((e,t,n)=>vt(void 0,void 0,void 0,(function*(){return"invoice"===e?yield(0,pt.Rn)(t,n):"invoice_cancellation"===e?yield(0,pt._k)(t,n):"Error"})))(i.invoice_type,t.options.orderSaleId,i).then((e=>{window.open(p.Xb.PURE_URL+e),a(c.t.All)})).finally((()=>{y(!1),u(!1)})),"credit"===n?T(h,t.options.orderSaleId,i).then((e=>{window.open(p.Xb.PURE_URL+e),a(c.t.All)})).finally((()=>{y(!1),u(!1)})):"order-sale"===n?(0,C.R_)(h,t.options.orderSaleId,i).then((e=>{window.open(p.Xb.PURE_URL+e),a(c.t.All)})).finally((()=>{y(!1),u(!1)})):"subscription"===n?((e,t,n)=>q(void 0,void 0,void 0,(function*(){return"cancellation"===e?yield(0,D.C$)(t,n):"confirmation"===e?yield(0,D.Ib)(t,n):"Error"})))(h,t.options.orderSaleId,i).then((e=>{window.open(p.Xb.PURE_URL+e),a(c.t.All)})).finally((()=>{y(!1),u(!1)})):"purchase"===n&&$(h,t.options.orderSaleId,i).then((e=>{window.open(p.Xb.PURE_URL+e),a(c.t.All)})).finally((()=>{y(!1),u(!1)}))}};return r.createElement(Jr,null,r.createElement("div",{className:"content"},r.createElement(J.Z,{className:"select-container",align:"middle",gutter:[16,16]},r.createElement(ee.Z,{span:24},r.createElement(te.Z,null,r.createElement(ne.Z,null,i("Order.Receipt.Create"),":"),r.createElement(Ct.Z,{value:h,className:"action-select",onChange:e=>{"order-sale"===n&&"pick_list"===e?Z(e):(u(!0),f(e))},placeholder:i("Global.Action")+"...",disabled:!!s&&"partner"!==n},Yr({receipt:t,selectOptionsCreditMode:()=>r.createElement(r.Fragment,null,r.createElement(Qr,{value:"default",disabled:!0},i("Global.SelectPlaceholder",{title:"Item"})),t.options.correctionUrl?r.createElement(Qr,{value:"correction_document_cancellation"},i("Order.Receipt.GenerateCorrectionDocumentCancellation")):r.createElement(Qr,{value:"correction_document"},i("Order.Receipt.GenerateCorrectionDocument")),t.options.creditNoteUrl?r.createElement(Qr,{value:"credit_note_cancellation"},i("Order.Receipt.GenerateCreditNoteInvoiceCancellation")):r.createElement(Qr,{value:"credit_note"},i("Order.Receipt.GenerateCreditNoteInvoice"))),selectOptionsSubscribeOptions:()=>r.createElement(r.Fragment,null,r.createElement(Qr,{value:"default",disabled:!0},i("Global.SelectPlaceholder",{title:"Item"})),r.createElement(Qr,{value:"cancellation"},i("Order.Receipt.GenerateCancellation")),r.createElement(Qr,{value:"confirmation"},i("Order.Receipt.GenerateConfirmation"))),selectOptionsPurchaseOptions:()=>r.createElement(r.Fragment,null,r.createElement(Qr,{value:"default",disabled:!0},i("Global.SelectPlaceholder",{title:"Item"})),r.createElement(Qr,{value:"generatePurchase"},i("Order.Receipt.GeneratePurchase"))),t:i})[n]),"purchase"===n&&r.createElement(re.Z,{disabled:s,onClick:()=>{b(!0)}},i("Global.UploadFile")))),r.createElement(ee.Z,{span:24},r.createElement(ae.Z,{dataSource:t.documents,columns:o.tableColumns,pagination:!1})))),(!s||"partner"===n)&&r.createElement(Br,{module:o,pending:g,moduleType:n,visible:m,setVisible:u,onSubmit:e=>Z(void 0,e),setSelectedValue:e=>f(e)}),"purchase"===n&&!s&&r.createElement(zr,{module:o,onSubmit:t=>{y(!0),(0,I.q_)(e,t).then((()=>{y(!1),b(!1),a(c.t.All)})).catch((()=>{y(!1)}))},pending:g,visible:v,setVisible:b}))};const Yr=({receipt:e,selectOptionsCreditMode:t,selectOptionsSubscribeOptions:n,selectOptionsPurchaseOptions:a,t:l})=>({"order-sale":e.options.invoiceId?r.createElement(r.Fragment,null,r.createElement(Qr,{value:"default",disabled:!0},l("Global.SelectPlaceholder",{title:"Item"})),r.createElement(Qr,{value:"invoice_cancellation"},l("Order.Receipt.GenerateInvoiceCancellation")),r.createElement(Qr,{value:"delivery_note"},l("Order.Receipt.GenerateDeliveryNote")),r.createElement(Qr,{value:"pick_list"},l("Order.Receipt.GeneratePickList")),r.createElement(Qr,{value:"export_custom"},l("Order.Receipt.ExportCustom")),r.createElement(Qr,{value:"total_summery"},l("Order.Receipt.TotalSummery"))):r.createElement(r.Fragment,null,r.createElement(Qr,{value:"default",disabled:!0},l("Global.SelectPlaceholder",{title:"Item"})),r.createElement(Qr,{value:"invoice"},l("Order.Receipt.GenerateInvoice")),r.createElement(Qr,{value:"delivery_note"},l("Order.Receipt.GenerateDeliveryNote")),r.createElement(Qr,{value:"pick_list"},l("Order.Receipt.GeneratePickList")),r.createElement(Qr,{value:"export_custom"},l("Order.Receipt.ExportCustom")),r.createElement(Qr,{value:"total_summery"},l("Order.Receipt.TotalSummery"))),partner:r.createElement(r.Fragment,null,r.createElement(Qr,{value:"default",disabled:!0},l("Global.SelectPlaceholder",{title:"Item"})),r.createElement(Qr,{value:"invoice"},l("Order.Receipt.GenerateInvoice")),r.createElement(Qr,{value:"invoice_cancellation"},l("Order.Receipt.GenerateInvoiceCancellation"))),credit:t(),subscription:n(),purchase:a()}),Jr=b.ZP.div`
  & .content {
    border-radius: 4px;
    box-shadow: 0 0 10px #ebede7;
    padding: 12px;
    & .select-container {
      padding: 5px;
      & .ant-select {
        outline: none;
        margin-left: 3px;
      }
    }
    & .ant-table {
      & th.ant-table-cell {
        color: #fff;
        background: #4a5161;
      }

      & tr {
        &:nth-child(odd) {
          & td.ant-table-cell {
            background: #fbfbfb;
          }
        }

        &:nth-child(even) {
          & td.ant-table-cell {
            background: #f2f2f2;
          }
        }
      }
      & .action-btn {
        color: #4474e7;
      }
    }

    & .action-select {
      min-width: 16vw;
    }
  }
  .table-container {
    width: 100%;
  }
`;var ea=n(25885),ta=(n(11483),n(34604)),na=n(24876),ra=n(58697),aa=n(32117),la=n(92555),ia=n(88866);var oa=function({orderPacking:{id:e,number:t},updateTab:n}){const[a,l]=(0,r.useState)("None"),[o,d]=(0,r.useState)(t),{profile:{roles:s}}=(0,r.useContext)(p.Vo),m=!!s.find((e=>"partner"===e.slug));return r.createElement(J.Z,null,r.createElement(ee.Z,{span:10},r.createElement(me.Z,{disabled:m,placeholder:t?i.ZP.t("Order.Delivery.TrackingCodePlaceholder"):i.ZP.t("Order.Delivery.TrackingCode"),value:o,onChange:e=>d(e.target.value)})),r.createElement(ee.Z,{offset:1,span:13},r.createElement(te.Z,{direction:"horizontal"},r.createElement(Pt,null,r.createElement(Zt.Z,{title:i.ZP.t("Order.Delivery.EditTrackingCode")},r.createElement(re.Z,{disabled:m,icon:r.createElement(yt.Z,null),size:"small",type:"ghost",loading:"Edit"===a,onClick:()=>{""!==o?(l("Edit"),(0,ie.ZP)(e,o).then((()=>{l("None"),n(c.t.Settings)})).catch((()=>l("None")))):Pe.ZP.error(i.ZP.t("Order.Delivery.EditTrackingCodeRequired"))}}))),!t&&!o&&r.createElement(Pt,null,r.createElement(Zt.Z,{title:i.ZP.t("Order.Delivery.CreateShippingLabel")},r.createElement(re.Z,{disabled:m,icon:r.createElement(aa.Z,null),size:"small",type:"ghost",loading:"Call"===a,onClick:()=>{l("Call"),(0,ie.xo)(e).then((e=>{d(null==e?void 0:e.number),Pe.ZP.success(i.ZP.t("Order.Edit.CreateShippingLable")),l("None")})).catch((()=>{l("None")}))}}))),r.createElement(Pt,null,r.createElement(Zt.Z,{title:i.ZP.t("Order.Delivery.LinkToPacking")},r.createElement(re.Z,{icon:r.createElement(la.Z,null),size:"small",type:"ghost",disabled:m,loading:"Link"===a,onClick:()=>{l("Link"),(0,ie.mV)(e).then((e=>{window.open("https://"+e),l("None")})).catch((()=>l("None")))}}))),r.createElement(Pt,null,r.createElement(Zt.Z,{title:i.ZP.t("Order.Delivery.GeneratePacklistDocument")},r.createElement(re.Z,{icon:r.createElement(ia.Z,null),size:"small",type:"ghost",loading:"PackList"===a,onClick:()=>{l("PackList"),(0,ie.vK)(e).then((e=>{l("None"),window.open(p.Xb.PURE_URL+e)})).catch((e=>{l("None"),ct.Z.error(e.message)}))}}))),r.createElement(Pt,null,r.createElement(Zt.Z,{title:i.ZP.t("Order.Delivery.RemovePacking")},r.createElement(re.Z,{disabled:m,icon:r.createElement(Nt.Z,null),size:"small",type:"ghost",loading:"Remove"===a,onClick:()=>{l("Remove"),(0,ie.X4)(e).then((()=>{l("None"),n(c.t.Settings)})).catch((()=>l("None")))}}))))))},da=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function i(e){try{d(r.next(e))}catch(e){l(e)}}function o(e){try{d(r.throw(e))}catch(e){l(e)}}function d(e){e.done?n(e.value):a(e.value).then(i,o)}d((r=r.apply(e,t||[])).next())}))};const sa=(0,Zn.cn)([]),ca=new o.Vx("/payment-terms"),ma=(0,_n.el)((e=>({queryKey:["OrderTermOfPayment",e(sa)],queryFn:()=>da(void 0,void 0,void 0,(function*(){return(yield ca.getAll({pagination:{per_page:1e3},params:{isActive:!0}})).data}))})));var ua,pa=function({value:e,loading:t=!1,disabled:n=!1,placeholder:a=i.ZP.t("Global.SelectPlaceholder",{title:"Term of Payments"}),onChange:l}){const[d]=(0,Zn.KO)(ma);return r.createElement(r.Fragment,null,r.createElement(Pn.ZP,{isClearable:!0,options:null!=d?d:[],placeholder:a,isLoading:!(d&&!t)||void 0,isDisabled:n,onChange:e=>null==l?void 0:l(e),getOptionLabel:e=>{var t;return null!==(t=e.description)&&void 0!==t?t:e.discount_percentage+"%"},getOptionValue:e=>String(null==e?void 0:e.id),theme:e=>(0,o.$p)(e),classNamePrefix:"react-select",value:e}))};!function(e){e.MainContainer=b.ZP.div`
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

    & .row {
      &:nth-child(even) {
        background: #fbfbfb;
      }
      &:nth-child(odd) {
        background: #f2f2f2;
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

    & .smaller-red {
      color: 'red';
      font-size: '10px';
    }
  `}(ua||(ua={}));var va=ua;n(69120),n(91631);function Ea({moduleType:e,orderSale:t,states:n,packages:a}){const[l,o]=(0,r.useState)();function d(r,a,l){var i;const o=null!==(i=null==t?void 0:t.id)&&void 0!==i?i:0;n.setPending(l),(0,C.gL)(o,s(),a(r),e).then((()=>{n.updateTab(c.t.Settings),n.setPending("None")})).catch((()=>n.setPending("None")))}function s(){return"credit"===e&&t.isEditable||(null==t?void 0:t.is_editable)}return(0,r.useEffect)((()=>{t&&o({credit:w(t),"order-sale":(0,C.NL)(t),subscription:K(t),purchase:A(t)}[e])}),[t]),{changeCountry:function(e){d(e,(e=>({country_id:e.id})),"Country")},changeCurrency:function(e){d(e,(e=>({currency_id:e.id})),"Currency")},changeLanguage:function(e){d(e,(e=>({language_id:e.id})),"Language")},changeReferrer:function(e){d(e,(e=>({referrer_id:e.id})),"Referrer")},changeSubdomain:function(e){d(e,(e=>({subdomain_id:e.id})),"Subdomain")},changeShippingProfile:function(r){var l;const o=!a||0===a.length;s()?o?(n.setPending("Shipping Profile"),(0,C.ld)(null!==(l=null==t?void 0:t.id)&&void 0!==l?l:0,r,e).then((()=>{n.updateTab(c.t.All),n.setPending("None")})).catch((()=>n.setPending("None")))):Pe.ZP.error(i.ZP.t("Order.Settings.EditShippingProfileError")):Pe.ZP.error(i.ZP.t("Order.Overview.EditError"))},changeStatus:function(r){var a;n.setPending("Order Status"),s()?(0,C.Nf)(null!==(a=null==t?void 0:t.id)&&void 0!==a?a:0,r,e).then((()=>{n.updateTab(c.t.All),n.setPending("None")})).catch((()=>n.setPending("None"))):Pe.ZP.error(i.ZP.t("Order.Overview.EditError"))},changeShippingCost:function(r,a){var l;s()?(n.setPending("Shipping Cost"),(0,C.ME)(null!==(l=null==t?void 0:t.id)&&void 0!==l?l:0,r,e,a).then((()=>{n.updateTab(c.t.All),n.setPending("None")})).catch((e=>{n.setPending("None"),Pe.ZP.error(e.message)}))):Pe.ZP.error(i.ZP.t("Order.Overview.EditError"))},onSubmit:function(e){var r;n.setPending("Packing Modal"),(0,C.G0)(null!==(r=null==t?void 0:t.id)&&void 0!==r?r:0,e).then((()=>{n.setPending("None"),n.setModalVisibility(!1),n.updateTab(c.t.Settings)})).catch((()=>{n.setPending("None"),n.setModalVisibility(!1)}))},setShippedOn:function(e){var r;n.setPending("Shipped On"),e instanceof ut()&&(e=e.format("YYYY-MM-DD")),(0,ie.wx)(null!==(r=null==t?void 0:t.id)&&void 0!==r?r:0,e).then((()=>{n.updateTab(c.t.Settings),n.setPending("None")})).catch((()=>{n.setPending("None")}))},orderSettings:l,generatePaymentLink:function(e){n.setPending("Generate Payment Link"),(0,C.lg)(e).then((e=>{n.setPaymentLink(e),n.setPending("None"),Pe.ZP.success(i.ZP.t("Order.Payment.GeneratePaymentLinkSuccess"))})).catch((e=>{n.setPending("None"),ct.Z.error({message:i.ZP.t("Order.Payment.GeneratePaymentLinkError"),description:e.message})}))},copyPaymentLinkToClipboard:function(e){navigator.clipboard.writeText(e),Pe.ZP.success(i.ZP.t("Order.Payment.CopyPaymentLinkSuccess"))}}}var ba=({orderSale:e,moduleType:t,updateTab:n})=>{var a,i,o,d,s,m,u,v,b,y;const{t:h}=(0,E.$)(),{profile:{roles:Z}}=(0,r.useContext)(p.Vo),P=!!Z.find((e=>"partner"===e.slug)),[_,O]=(0,r.useState)(null),[S,w]=(0,r.useState)("None"),[N,x]=(0,r.useState)(),[k,T]=(0,r.useState)(!1),[I,V]=(0,r.useState)(!1),[F,G]=(0,r.useState)(""),A=Ea({orderSale:e,moduleType:t,states:{setPaymentLink:G,setModalVisibility:V,updateTab:n,setPending:e=>w(e)},packages:_});if(!A.orderSettings||!e)return r.createElement(l.aN,{title:h("Order.Settings.Loader")});const{country:L,shippedOn:R,currency:j,shippingCostValue:$,termOfPayment:{paymentDue:q,valueDate:U,earlyPaymentDiscount:M,earlyPaymentDiscountPercent:K},selects:{orderStatus:z,language:W,paymentMethod:B,shippingProfile:X}}=A.orderSettings;return r.createElement(va.MainContainer,null,r.createElement(J.Z,{gutter:24},r.createElement(ee.Z,{span:12,className:"first-col"},r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Status"))),r.createElement(ee.Z,{span:16},r.createElement(l.LE,{isClearable:!1,className:"status-select",hasNew:!1,module:new Ie.Xq,onChange:e=>A.changeStatus(e.id),optionSelector:{label:"name",value:"id"},pending:"Order Status"===S,disabled:"Order Status"===S||P,value:z}))),"order-sale"===t?r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Location"))),r.createElement(ee.Z,{span:16},r.createElement(f.O,{loading:"Country"===S,value:L,disabled:!0,onChange:A.changeCountry}))):r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Location"))),r.createElement(ee.Z,{span:16},r.createElement(ne.Z.Text,{strong:!0},(null==L?void 0:L.name)?L.name:"-"))),r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Language"))),r.createElement(ee.Z,{span:16},r.createElement(qe.S,{disabled:"Language"===S||P||!!R,loading:"Language"===S,value:null!=W?W:void 0,onChange:A.changeLanguage,isClearable:!1}))),"credit"===t&&r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.ShippedOn"))),r.createElement(ee.Z,{span:16},r.createElement(ne.Z.Text,{strong:!0},R?(0,g.Wb)(R):"-"))),"order-sale"===t&&r.createElement(_t,{disabled:P,isPending:"Shipped On"===S,title:r.createElement("strong",null,h("Order.Titles.ShippedOn")),child:r.createElement(ne.Z.Text,{strong:!0},R?(0,g.Wb)(R):"-"),isDate:!0,defaultEditValue:R?ut()(R):void 0,onSubmit:e=>A.setShippedOn(e),shippedOn:R,onCancelShippedOn:e=>A.setShippedOn(e)}),"purchase"===t&&r.createElement(_t,{disabled:!0,isPending:"Shipped On"===S,title:r.createElement("strong",null,h("Order.Titles.DeliveredOn")),child:r.createElement(ne.Z.Text,{strong:!0},R?(0,g.Wb)(R):"-"),isDate:!0,onSubmit:e=>A.setShippedOn(e)}),r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Currency"))),r.createElement(ee.Z,{span:16},r.createElement(er.V,{menuPlacement:"top",loading:"Currency"===S,disabled:"purchase"===t||"credit"===t||P||"Currency"===S||!!R,value:null!=j?j:void 0,onChange:A.changeCurrency,isClearable:!1}))),"purchase"!==t&&r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Referrer"))),r.createElement(ee.Z,{span:16},r.createElement(ta.Z,{menuPlacement:"top",loading:"Referrer"===S,disabled:"credit"===t||P||!!R,value:"credit"===t?null!==(i=null===(a=e.order)||void 0===a?void 0:a.referrer)&&void 0!==i?i:void 0:null!==(o=e.referrer)&&void 0!==o?o:void 0,onChange:A.changeReferrer}))),"purchase"!==t&&r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Subdomain"))),r.createElement(ee.Z,{span:16},r.createElement(ra.Z,{menuPlacement:"top",loading:"Subdomain"===S,disabled:"credit"===t||P||!!R,value:"credit"===t?null!==(s=null===(d=e.order)||void 0===d?void 0:d.subdomain)&&void 0!==s?s:void 0:null!==(m=e.subdomain)&&void 0!==m?m:void 0,onChange:A.changeSubdomain}))),"order-sale"===t&&(null==B?void 0:B.is_link_generatable)&&r.createElement(r.Fragment,null,r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Payment.GeneratePaymentLink"))),r.createElement(ee.Z,{span:16},r.createElement(Zt.Z,{className:"action-btn",title:h("Order.Payment.GeneratePaymentLink")},r.createElement(re.Z,{loading:"Generate Payment Link"===S,onClick:()=>A.generatePaymentLink(e.id),type:"primary"},h("Order.Payment.Generate"))))),F&&(null==B?void 0:B.is_link_generatable)&&r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:5,className:"title"},r.createElement("strong",null,h("Order.Payment.PaymentLink"))),r.createElement(ee.Z,{span:16},r.createElement(me.Z,{value:F,placeholder:h("Order.Payment.PaymentLink")})),r.createElement(ee.Z,{span:3},r.createElement(Zt.Z,{className:"action-btn",title:h("Order.Payment.CopyPaymentLink")},r.createElement(re.Z,{onClick:()=>A.copyPaymentLinkToClipboard(F),shape:"default",icon:r.createElement(kt.Z,null)})))))),r.createElement(ee.Z,{span:12,className:"second-col"},r.createElement(J.Z,{className:"row",align:"middle"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.PaymentMethod"))),r.createElement(ee.Z,{span:16},r.createElement(tr.m,{isClearable:!1,loading:"Payment Method"===S,disabled:"credit"===t||P,value:null!=B?B:void 0,companyId:null==e?void 0:e.company_id,onChange:r=>{w("Payment Method"),(0,C.gL)(e.id,"credit"===t?e.isEditable:e.is_editable,{payment_method_id:r.id},t).then((()=>{w("None"),n(c.t.Settings)})).catch((()=>w("None")))}}))),r.createElement(J.Z,{className:"row",align:"top"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.TermsOfPayment"))),k?r.createElement(ee.Z,{span:14},r.createElement(J.Z,null,r.createElement(ee.Z,{span:16},r.createElement(pa,{disabled:"Terms Of Payment"===S||P,loading:"Terms Of Payment"===S,onChange:e=>x(e),value:N})),r.createElement(ee.Z,{span:4},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(yt.Z,null),size:"small",type:"ghost",loading:"Terms Of Payment"===S,onClick:()=>{w("Terms Of Payment"),(0,ie.Kn)(null==e?void 0:e.id,t,{payment_term_id:null==N?void 0:N.id}).then((()=>{w("None"),n(c.t.Settings)})).finally((()=>w("None")))}}))),r.createElement(ee.Z,{span:4},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(ht.Z,null),size:"small",type:"ghost",onClick:()=>T(!1)}))))):r.createElement(ee.Z,{span:14},r.createElement(te.Z,{direction:"vertical",style:{width:"100%"}},r.createElement(J.Z,{align:"top"},r.createElement(ee.Z,{span:10},r.createElement(ne.Z.Text,null,h("Order.Titles.PaymentDue"))),r.createElement(ee.Z,{span:8},r.createElement("strong",null,q))),r.createElement(J.Z,{align:"top"},r.createElement(ee.Z,{span:10},r.createElement(ne.Z.Text,null,h("Order.Titles.ValueDate"))),r.createElement(ee.Z,{span:8},r.createElement("strong",null,U?(0,g.Wb)(U):"-"))),r.createElement(J.Z,{align:"top"},r.createElement(ee.Z,{span:10},r.createElement(ne.Z.Text,null,h("Order.Titles.EarlyPaymentDiscount")," ")),r.createElement(ee.Z,{span:8},r.createElement("strong",null,M))),r.createElement(J.Z,{align:"top"},r.createElement(ee.Z,{span:10},r.createElement(ne.Z.Text,null,h("Order.Titles.EarlyPaymentDiscountPercent"))),r.createElement(ee.Z,{span:8},r.createElement("strong",null,K+"%"))))),!k&&r.createElement(ee.Z,{span:2,style:{display:P?"none":void 0}},r.createElement(Pt,null,r.createElement(re.Z,{icon:r.createElement(fe.Z,null),size:"small",type:"ghost",onClick:()=>T(!0),disabled:"credit"===t})))),"subscription"===t&&r.createElement(_t,{disabled:P,isPending:"Subscribe Period"===S,title:r.createElement("strong",null,h("Order.Titles.SubPeriod")),child:r.createElement(ne.Z.Text,{strong:!0},null!==(u=A.orderSettings.timePeriod)&&void 0!==u?u:0),isNumber:!0,min:0,defaultEditValue:null!==(v=A.orderSettings.timePeriod)&&void 0!==v?v:0,onSubmit:t=>{w("Subscribe Period"),(0,D.j6)(e.id,t).then((()=>{n(c.t.Settings),w("None")})).catch((()=>w("None")))}}),"purchase"===t&&r.createElement(r.Fragment,null,r.createElement(_t,{disabled:P,isPending:"Shipping Cost"===S,title:r.createElement("strong",null,h("Order.Titles.ShippingCost")),child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(null!==(b=null==j?void 0:j.iso3)&&void 0!==b?b:"EUR",$)),isNumber:!0,hasSecond:!0,secondTitle:"Vat Amount (0% - 100%)",min:0,defaultEditValue:$,onSubmit:(e,t)=>A.changeShippingCost(e,null!=t?t:0)}),r.createElement(_t,{disabled:P,title:r.createElement("strong",null,h("Order.Titles.ShippingProfile")),child:r.createElement(na.X,{hasNew:!1,pending:"Shipping Profile"===S,disabled:"Shipping Profile"===S,menuPlacement:"top",value:null!=X?X:void 0,onChange:e=>{var t;return A.changeShippingProfile(null===(t=e)||void 0===t?void 0:t.id)}}),isConstant:!0})),"purchase"!==t&&r.createElement(r.Fragment,null,r.createElement(_t,{disabled:P||!!R,isPending:"Shipping Cost"===S,title:r.createElement("strong",null,h("Order.Titles.ShippingCost")),child:r.createElement(ne.Z.Text,{strong:!0},(0,g.v3)(null!==(y=null==j?void 0:j.iso3)&&void 0!==y?y:"EUR",$)),isNumber:!0,min:0,defaultEditValue:$,onSubmit:e=>A.changeShippingCost(e)}),r.createElement(_t,{disabled:P,title:r.createElement("strong",null,h("Order.Titles.ShippingProfile")),child:r.createElement(na.X,{pending:"Shipping Profile"===S,disabled:"Shipping Profile"===S||P||!!R,menuPlacement:"top",value:null!=X?X:void 0,onChange:e=>{var t;return A.changeShippingProfile(null===(t=e)||void 0===t?void 0:t.id)},hasNew:!("subscription"===t)}),isConstant:!0})),"order-sale"===t&&r.createElement(J.Z,{className:"row",align:"top"},r.createElement(ee.Z,{span:8,className:"title"},r.createElement("strong",null,h("Order.Titles.Packing"))),r.createElement(ee.Z,{span:16},e&&A.orderSettings&&r.createElement(ea.Z,{data:[_,O],service:()=>(0,ie.F0)(null==e?void 0:e.id)},r.createElement(te.Z,{direction:"vertical",style:{width:"100%"}},r.createElement(Pt,{alignEnd:!0},r.createElement(Zt.Z,{title:h("Order.Settings.AddPacking")},r.createElement(re.Z,{disabled:P||!!R,icon:r.createElement(H.Z,null),size:"small",type:"ghost",onClick:()=>{e.shippingProfile?V(!0):Pe.ZP.error(h("Order.Settings.PackingError"))}}))),r.createElement("hr",null),null==_?void 0:_.map((e=>r.createElement(oa,{orderPacking:e,updateTab:n}))))))))),"order-sale"===t&&!P&&r.createElement(be,{orderSalePositions:e.orderSalePositions,packages:_,onSubmit:A.onSubmit,pending:"Packing Modal"===S,visible:I,setVisible:V}))};const{TabPane:ga}=v.Z,ya=({moduleType:e,activeTab:t,orderSale:n,orderDocument:a,orderPayments:i,setActiveTab:o,updateTab:d})=>{const{t:s}=(0,E.$)();if(!n)return r.createElement(l.aN,null);const m={"order-sale":null==n?void 0:n.id,credit:null==n?void 0:n.id,subscription:null==n?void 0:n.id,purchase:null==n?void 0:n.id,partner:n.id}[e];return r.createElement(r.Fragment,null,r.createElement(fa,null,r.createElement(v.Z,{type:"card",className:"order-tabs",activeKey:t,onChange:e=>o(e)},ha({orderDocument:a,orderPayments:i,orderSale:Object(n),order_id:m,moduleType:e,updateTab:d,t:s})[e]())),t===c.t.Overview&&("partner"===e?r.createElement(Hn,{orderSale:n,updateTab:d}):r.createElement(Ur,{orderSale:n,moduleType:e,updateTab:d})))},ha=({orderSale:e,moduleType:t,updateTab:n,orderPayments:a,t:l,order_id:i,orderDocument:o})=>{const{profile:{roles:d}}=(0,r.useContext)(p.Vo),s=!!d.find((e=>"partner"===e.slug));return{"order-sale":()=>{var d,m;return r.createElement(r.Fragment,null,r.createElement(ga,{key:c.t.Overview,tab:l("Order.Tab.Overview")},r.createElement(mn,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Settings,tab:l("Order.Tab.Settings")},r.createElement(ba,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Payment,tab:l("Order.Tab.Payment")},r.createElement(ir,{orderSale:e,paymentData:a,moduleType:t,updateTab:n})),!s&&r.createElement(ga,{key:c.t.Email,tab:l("Order.Tab.Email")},r.createElement(rt,{orderId:Number(i),moduleType:t})),r.createElement(ga,{key:c.t.Receipt,tab:l("Order.Tab.Receipts")},r.createElement(Hr,{receipt:o,orderSaleId:Number(i),moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Customer,tab:l("Order.Tab.Customer")},r.createElement(Q,{orderSale:e,moduleType:t})),r.createElement(ga,{key:c.t.Tickets,tab:l("Order.Tab.Tickets"),disabled:!0}),r.createElement(ga,{key:c.t.Orders,tab:l("Order.Tab.Orders")},r.createElement(ot,{orderSale:e,moduleType:t})),r.createElement(ga,{key:c.t.Stock,tab:l("Order.Tab.Stock"),disabled:!0}),r.createElement(ga,{key:c.t.ReOrder,tab:l("Order.Tab.ReOrder"),disabled:!0}),r.createElement(ga,{key:c.t.Properties,tab:l("Order.Tab.Properties"),disabled:!0}),r.createElement(ga,{key:c.t.Delivery,tab:l("Order.Tab.Delivery"),disabled:!0},r.createElement(ge,{orderSaleId:null!==(d=null==e?void 0:e.id)&&void 0!==d?d:null,orderSalePositions:null===(m=e)||void 0===m?void 0:m.orderSalePositions.filter((e=>e.productVariation)),updateTab:n})))},credit:()=>r.createElement(r.Fragment,null,r.createElement(ga,{key:c.t.Overview,tab:l("Order.Tab.Overview")},r.createElement(mn,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Settings,tab:l("Order.Tab.Settings")},r.createElement(ba,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Payment,tab:l("Order.Tab.Payment")},r.createElement(ir,{orderSale:e,paymentData:a,moduleType:t,updateTab:n})),!s&&r.createElement(ga,{key:c.t.Email,tab:l("Order.Tab.Email")},r.createElement(rt,{orderId:Number(i),moduleType:t})),r.createElement(ga,{key:c.t.Receipt,tab:l("Order.Tab.Receipts")},r.createElement(Hr,{receipt:o,orderSaleId:Number(i),moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Customer,tab:l("Order.Tab.Customer")},r.createElement(Q,{orderSale:e,moduleType:t})),r.createElement(ga,{key:c.t.Tickets,tab:l("Order.Tab.Tickets"),disabled:!0}),r.createElement(ga,{key:c.t.Orders,tab:l("Order.Tab.Orders")},r.createElement(ot,{orderSale:e,moduleType:t}))),subscription:()=>r.createElement(r.Fragment,null,r.createElement(ga,{key:c.t.Overview,tab:l("Order.Tab.Overview")},r.createElement(mn,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Settings,tab:l("Order.Tab.Settings")},r.createElement(ba,{orderSale:e,moduleType:t,updateTab:n})),!s&&r.createElement(ga,{key:c.t.Email,tab:l("Order.Tab.Email")},r.createElement(rt,{orderId:Number(i),moduleType:t})),r.createElement(ga,{key:c.t.Receipt,tab:l("Order.Tab.Receipts")},r.createElement(Hr,{receipt:o,orderSaleId:Number(i),moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Customer,tab:l("Order.Tab.Customer")},r.createElement(Q,{orderSale:e,moduleType:t})),r.createElement(ga,{key:c.t.Orders,tab:l("Order.Tab.Orders")},r.createElement(ot,{orderSale:e,moduleType:t}))),purchase:()=>r.createElement(r.Fragment,null,r.createElement(ga,{key:c.t.Overview,tab:l("Order.Tab.Overview")},r.createElement(mn,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Settings,tab:l("Order.Tab.Settings")},r.createElement(ba,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Payment,tab:l("Order.Tab.Payment")},r.createElement(ir,{orderSale:e,paymentData:a,moduleType:t,updateTab:n})),!s&&r.createElement(ga,{key:c.t.Email,tab:l("Order.Tab.Email")},r.createElement(rt,{orderId:Number(i),moduleType:t})),r.createElement(ga,{key:c.t.Receipt,tab:l("Order.Tab.Receipts")},r.createElement(Hr,{receipt:o,orderSaleId:Number(i),moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Customer,tab:l("Order.Tab.Supplier")},r.createElement(Q,{orderSale:e,moduleType:t})),r.createElement(ga,{key:c.t.Tickets,tab:l("Order.Tab.Tickets"),disabled:!0}),r.createElement(ga,{key:c.t.Orders,tab:l("Order.Tab.Orders")},r.createElement(ot,{orderSale:e,moduleType:t}))),partner:()=>r.createElement(r.Fragment,null,r.createElement(ga,{key:c.t.Overview,tab:l("Order.Tab.Overview")},r.createElement(mn,{orderSale:e,moduleType:t,updateTab:n})),r.createElement(ga,{key:c.t.Receipt,tab:l("Order.Tab.Receipts")},r.createElement(Hr,{receipt:o,orderSaleId:Number(i),moduleType:t,updateTab:n})))}},fa=b.ZP.div`
  padding: 32px 16px;
  border-radius: 12px;
  background: #fff;
  margin-top: 16px;

  & .content {
    padding: 12px 0;
  }

  & .order-tabs .ant-tabs-nav-list {
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
`;var Za=n(86089);function Pa({moduleType:e="order-sale",id:t=null}){const n={"order-sale":new Ie.ZP,credit:new m,subscription:new it.Z,purchase:new lt.ZP,partner:new Za.ZP},i=(0,a.s0)(),o=null!=t?t:(0,a.UO)().order_id||-1;-1===o&&i({"order-sale":"/orders/order-sale",credit:"/orders/credit",subscription:"/orders/subscription",purchase:"/orders/purchase",partner:"/orders/partner"}[e]);const d=[...n[e].breadcrumbItems,{path:"",breadcrumbName:o?`${n[e].title[0]} - ${o}`:`New ${n[e].title[0]}`}],[s,u]=(0,r.useState)(null),[p,v]=(0,r.useState)(null),[E,b]=(0,r.useState)([]),[g,y]=(0,r.useState)(c.t.Overview);(0,r.useEffect)((()=>{h(c.t.All)}),[o]);const h=t=>{if("credit"===e)switch(t){case c.t.Overview:case c.t.Settings:case c.t.Email:case c.t.Customer:case c.t.Delivery:case c.t.Orders:case c.t.Properties:case c.t.ReOrder:case c.t.Stock:case c.t.Tickets:u(null),O(Number(o)).then((e=>u(e)));break;case c.t.Receipt:v(null),k(Number(o)).then((e=>v(e)));break;case c.t.Payment:u(null),O(Number(o)).then((e=>u(e))),b([]),(0,Z.op)(Number(o)).then((e=>b(e)));break;case c.t.All:u(null),O(Number(o)).then((e=>u(e))),v(null),k(Number(o)).then((e=>v(e))),b([]),(0,Z.op)(Number(o)).then((e=>b(e)))}else if("subscription"===e)switch(t){case c.t.Overview:case c.t.Settings:case c.t.Email:case c.t.Customer:case c.t.Orders:u(null),M(Number(o)).then((e=>u(e)));break;case c.t.Receipt:v(null),B(Number(o)).then((e=>v(e)));break;case c.t.All:u(null),M(Number(o)).then((e=>u(e))),v(null),B(Number(o)).then((e=>v(e)))}else if("purchase"===e)switch(t){case c.t.Overview:case c.t.Settings:case c.t.Email:case c.t.Customer:case c.t.Orders:case c.t.Tickets:u(null),G(Number(o)).then((e=>u(e)));break;case c.t.Receipt:v(null),j(Number(o)).then((e=>v(e)));break;case c.t.Payment:u(null),G(Number(o)).then((e=>u(e))),b([]),(0,I.gU)(Number(o)).then((e=>b(e)));break;case c.t.All:u(null),G(Number(o)).then((e=>u(e))),v(null),j(Number(o)).then((e=>v(e))),b([]),(0,I.gU)(Number(o)).then((e=>b(e)))}else if("partner"===e)switch(t){case c.t.Payment:case c.t.Overview:case c.t.Settings:case c.t.Email:case c.t.Customer:case c.t.Orders:case c.t.Tickets:u(null),Et(Number(o)).then((e=>u(e)));break;case c.t.Receipt:v(null),bt(Number(o)).then((e=>v(e)));break;case c.t.All:u(null),Et(Number(o)).then((e=>u(e))),v(null),bt(Number(o)).then((e=>v(e)))}else if("order-sale"===e)switch(t){case c.t.Overview:case c.t.Settings:case c.t.Email:case c.t.Customer:case c.t.Delivery:case c.t.Orders:case c.t.Properties:case c.t.ReOrder:case c.t.Stock:case c.t.Tickets:u(null),(0,C.OV)(Number(o)).then((e=>u(e)));break;case c.t.Receipt:v(null),(0,C.vO)(Number(o)).then((e=>v(e)));break;case c.t.Payment:u(null),(0,C.OV)(Number(o)).then((e=>u(e))),b([]),(0,ie.Yr)(Number(o)).then((e=>b(e)));break;case c.t.All:u(null),(0,C.OV)(Number(o)).then((e=>u(e))),v(null),(0,C.vO)(Number(o)).then((e=>v(e))),b([]),(0,ie.Yr)(Number(o)).then((e=>b(e)))}y(t===c.t.All?g:t)};return s?r.createElement(l.Xg,{module:n[e]},r.createElement(l.Xg.Breadcrumb,{routes:d}),r.createElement(ya,{orderSale:s,orderDocument:p,orderPayments:E,activeTab:g,moduleType:e,setActiveTab:y,updateTab:h})):r.createElement(l.aN,null)}function _a(){const{credit_id:e}=(0,a.UO)();return r.createElement(Pa,{moduleType:"credit",id:Number(e)})}function Oa(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(u,null)}),r.createElement(a.AW,{path:"/:credit_id",element:r.createElement(_a,null)}))}var Sa=({field:e,form:t})=>{const[n,a]=(0,r.useState)(!0),{t:i}=(0,E.$)();return r.createElement(ee.Z,{span:12,key:e},r.createElement(J.Z,null,r.createElement(ee.Z,{span:2},r.createElement(pe.Z,{onClick:()=>{a(!n),n||t.resetFields([e])}})),r.createElement(ee.Z,{span:22},r.createElement(ce.Z.Item,{name:e,label:"language_id"===e?i("Global.Language"):"flag_ids"===e?i("SidePanel.Flags"):"order_status_id"===e?i("Order.Field.OrderStatus"):""},function(e,t){switch(e){case"language_id":return r.createElement(qe.S,{disabled:t});case"flag_ids":return r.createElement(st.l,{isMulti:!0,disabled:t});case"order_status_id":return r.createElement(l.LE,{isClearable:!1,className:"status-select",hasNew:!1,maxItemsToShow:7,module:new Ie.Xq,optionSelector:{label:"name",value:"id"},disabled:t});default:return r.createElement(r.Fragment,null)}}(e,n)))))};var wa=({formFields:e,onSubmit:t,pending:n})=>{var a;const[i]=ce.Z.useForm();return r.createElement(ce.Z,{form:i,onFinish:t},r.createElement(J.Z,{gutter:32},null===(a=e.splice(1,4))||void 0===a?void 0:a.map((e=>r.createElement(Sa,{form:i,field:e})))),r.createElement(J.Z,null,r.createElement(ee.Z,{span:24},r.createElement(l.Ow,{isPending:n}))))};var Na=({groupFunctionIds:e,setModalVisible:t})=>{const[n,a]=(0,r.useState)(!1),[i,o]=(0,r.useState)([]),[d,s]=(0,r.useState)(!1);(0,r.useEffect)((()=>{a(!0),vn().get("/order-sales/bulk-update-fields").then((e=>{var t;o(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.data[0]),a(!1)})).catch((e=>{ct.Z.error(null==e?void 0:e.message),a(!1)}))}),[]);return n?r.createElement(l.aN,null):r.createElement(wa,{pending:d,formFields:i,onSubmit:n=>{var r,a,l,i;s(!0);const o={order_ids:e};n.order_status_id&&(o.order_status_id=null===(r=null==n?void 0:n.order_status_id)||void 0===r?void 0:r.id),n.language_id&&(o.language_id=null===(a=null==n?void 0:n.language_id)||void 0===a?void 0:a.id),n.flag_ids&&(null===(l=n.flag_ids)||void 0===l?void 0:l.length)>0&&(o.flag_ids=null===(i=null==n?void 0:n.flag_ids)||void 0===i?void 0:i.map((e=>null==e?void 0:e.id))),(0,ie.RM)(o).then((e=>{Pe.ZP.success(null==e?void 0:e.message),s(!1),t(!1)})).catch((e=>{ct.Z.error(e.message),s(!1),t(!1)}))}})};var xa=({groupFunctionIds:e,isModalVisible:t,setModalVisible:n})=>{const{t:a}=(0,E.$)();return r.createElement(r.Fragment,null,r.createElement(Yn.Z,{width:900,footer:!1,visible:t,closeIcon:r.createElement(ht.Z,null),closable:!0,destroyOnClose:!0,onCancel:()=>{n(!1)},title:a("Global.GroupFunction")},r.createElement(Na,{groupFunctionIds:e,setModalVisible:n})))};function ka(){const e=new Ie.ZP,{role:t}=(0,r.useContext)(p.Vo),[n,a]=(0,r.useState)([]),[i,d]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement(l.Xg,{module:e},r.createElement(l.Xg.Breadcrumb,null),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{onGroup:e=>{a(e),d(!0)},hasSearch:!0,hasNew:"partner"!==t,newLink:"",noListView:!0}),r.createElement(l.s_.ListView,{module:e,updateLink:e.breadcrumbItems[0].path,tableScroll:{x:1450,y:750},params:{orderBy:{id:"DESC"}},customEntities:{getAll:new o.Vx("/order-sales/list",e.title[0])}}))),i&&r.createElement(xa,{groupFunctionIds:n,isModalVisible:i,setModalVisible:d}))}function Ta(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(ka,null)}),r.createElement(a.AW,{path:"/:order_id",element:r.createElement(Pa,null)}))}function Ca(){const e=new Za.ZP;return r.createElement(l.Xg,{module:e},r.createElement(l.Xg.Breadcrumb,null),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasSearch:!0,newLink:"",noListView:!0}),r.createElement(l.s_.ListView,{module:e,updateLink:e.breadcrumbItems[0].path,tableScroll:{x:1450,y:750},params:{orderBy:{id:"DESC"}}})))}function Ia(){const{partner_id:e}=(0,a.UO)();return r.createElement(Pa,{moduleType:"partner",id:Number(e)})}function Da(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(Ca,null)}),r.createElement(a.AW,{path:"/:partner_id",element:r.createElement(Ia,null)}))}function Va(){const e=new lt.ZP,{role:t}=(0,r.useContext)(p.Vo);return r.createElement(l.Xg,{module:e},r.createElement(l.Xg.Breadcrumb,null),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasSearch:!0,hasNew:"partner"!==t,newLink:"",noListView:!0}),r.createElement(l.s_.ListView,{module:e,updateLink:e.breadcrumbItems[0].path,tableScroll:{x:1450,y:750},params:{orderBy:{id:"DESC"}},customEntities:{getAll:new o.Vx("order/purchases/list",e.title[0])}})))}function Fa(){const{purchase_id:e}=(0,a.UO)();return r.createElement(Pa,{moduleType:"purchase",id:Number(e)})}function Ga(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(Va,null)}),r.createElement(a.AW,{path:"/:purchase_id",element:r.createElement(Fa,null)}))}function Aa(){const e=new it.Z,{role:t}=(0,r.useContext)(p.Vo);return r.createElement(l.Xg,{module:e},r.createElement(l.Xg.Breadcrumb,null),r.createElement(l.Xg.Panel,null,r.createElement(l.s_.Header,{hasSearch:!0,hasNew:"partner"!==t,newLink:"",noListView:!0}),r.createElement(l.s_.ListView,{module:e,updateLink:e.breadcrumbItems[0].path,tableScroll:{x:1450,y:750},params:{orderBy:{id:"DESC"}}})))}function La(){const{subscription_id:e}=(0,a.UO)();return r.createElement(Pa,{moduleType:"subscription",id:Number(e)})}function Ra(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"",element:r.createElement(Aa,null)}),r.createElement(a.AW,{path:"/:subscription_id",element:r.createElement(La,null)}))}function ja(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"order-sale/*",element:r.createElement(Ta,null)}),r.createElement(a.AW,{path:"credit/*",element:r.createElement(Oa,null)}),r.createElement(a.AW,{path:"subscription/*",element:r.createElement(Ra,null)}),r.createElement(a.AW,{path:"purchase/*",element:r.createElement(Ga,null)}),r.createElement(a.AW,{path:"partner/*",element:r.createElement(Da,null)}))}}}]);