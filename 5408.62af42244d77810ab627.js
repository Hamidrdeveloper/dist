"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5408],{15408:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(92021),r=a(61858),l=a(33996),i=a(35062),o=a(10374),c=a(26490),d=a(21329),s=a(61320),m=a.n(s),u=a(27378),f=a(60071),p=a(26761),E=(a(95171),a(31675)),g=a(3288),v=a(97851),b=a(28681),y=a(48158),h=a(56591),Z=a(49989),C=a(48955),x=a(34234),D=a(39338),O=a(62500),_=(a(69938),a(59748)),S=a(2837),P=function(e,t,a,n){function r(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function o(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){e.done?a(e.value):r(e.value).then(i,o)}c((n=n.apply(e,t||[])).next())}))};const w=(0,D.cn)([]),Y=new S.Z,k=(0,_.el)((e=>({queryKey:["calendarCategories",e(w)],queryFn:()=>P(void 0,void 0,void 0,(function*(){return(yield Y.apiService.getAll({pagination:{per_page:100}})).data}))})));var M=a(82532);var F=function({value:e,isMulti:t=!1,hasNew:a=!0,disabled:n=!1,menuPlacement:r="bottom",onChange:l}){const[i,o]=(0,D.KO)(k),[c,d]=(0,u.useState)(!1),s=e=>null==l?void 0:l(e);return u.createElement(u.Fragment,null,u.createElement(O.ZP,{isClearable:!0,isMulti:t,options:null!=i?i:[],isLoading:!i||void 0,isDisabled:n,onChange:s,menuPlacement:r,getOptionLabel:e=>null==e?void 0:e.name,getOptionValue:e=>String(null==e?void 0:e.id),theme:e=>(0,x.$p)(e),components:{Menu:e=>(0,Z.S)({hasNew:a,props:e,onClick:()=>d(!0)}),IndicatorSeparator:()=>u.createElement("span",{style:{width:0}})},classNamePrefix:"react-select",value:e}),u.createElement(C.Z,{isVisible:c,setVisible:d,title:"Calendar.Category.Title"},u.createElement(M.Z,{onCallback:a=>{Array.isArray(e)?s([...e,a]):s(t?[a]:a),d(!1),o({type:"refetch"})}})))},I=(a(30690),function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a});function j({onSubmit:e,initDate:t,isPending:a,initialValues:n,onEventDelete:r}){const{t:c}=(0,f.$)(),[d]=g.Z.useForm();(0,u.useEffect)((()=>{n?d.setFieldsValue(Object.assign(Object.assign({},n),{date:[m()(`${n.start_date}T${n.start_time}`),m()(`${n.end_date}T${n.end_time}`)]})):t&&d.setFieldsValue({date:Array.isArray(t)?[m()(t[0]),m()(t[1])]:[m()(t),m()(t)]})}),[n]);return u.createElement(g.Z,{form:d,name:"country-form",layout:"vertical",onFinish:t=>{const{date:a}=t,n=I(t,["date"]);e(Object.assign(Object.assign({},n),{start_date:m()(a[0]).format("YYYY-MM-DD"),end_date:m()(a[1]).format("YYYY-MM-DD"),start_time:m()(a[0]).format("HH:mm"),end_time:m()(a[1]).format("HH:mm")}))},initialValues:{is_full_day:!1,is_repeating:!1,color:"#ed2559"}},u.createElement(u.Suspense,{fallback:u.createElement(l.aN,null)},u.createElement(i.Z,{gutter:[32,8],align:"bottom"},u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{label:c("Calendar.Event.Field.Name"),name:"title",rules:[{required:!0}]},u.createElement(v.Z,{placeholder:c("Global.InputPlaceholder",{title:c("Calendar.Event.Field.Name")})}))),u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{name:"date",rules:[{required:!0}],label:c("Calendar.Event.Field.Date")},u.createElement(b.Z.RangePicker,{showTime:!0,disabledDate:e=>e&&e<m()().startOf("day"),format:(0,E._A)(!0),placeholder:[c("Calendar.Event.Field.StartDate"),c("Calendar.Event.Field.EndDate")]}))),u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{name:"calendarCategories",label:c("Calendar.Category.Title")},u.createElement(F,{isMulti:!0}))),u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{label:c("Calendar.Event.Field.Location"),name:"location"},u.createElement(v.Z,{placeholder:c("Global.InputPlaceholder",{title:c("Calendar.Event.Field.Location")})}))),u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{label:c("Calendar.Event.Field.MeetLink"),name:"url"},u.createElement(v.Z,{placeholder:c("Global.InputPlaceholder",{title:c("Calendar.Event.Field.MeetLink")})}))),u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{label:c("Calendar.Event.Field.Color"),name:"color"},u.createElement(l.zH,null))),u.createElement(o.Z,{xs:24},u.createElement(g.Z.Item,{label:c("Calendar.Event.Field.Description"),name:"description"},u.createElement(v.Z.TextArea,{rows:4,placeholder:c("Global.InputPlaceholder",{title:c("Calendar.Event.Field.Description")})}))),u.createElement(o.Z,{xs:12},u.createElement(g.Z.Item,{name:"is_full_day",valuePropName:"checked"},u.createElement(y.Z,null,c("Calendar.Event.Field.AllDay")))),u.createElement(o.Z,{xs:12},u.createElement(g.Z.Item,{name:"is_repeating",valuePropName:"checked"},u.createElement(y.Z,null,c("Calendar.Event.Field.Repeat"))))),u.createElement(l.Ow,{isPending:a,Secondary:n?u.createElement(h.Z,{onClick:r,ghost:!0,danger:!0},"Delete"):null})))}var $=a(38239);var T=()=>{(0,u.useEffect)((()=>{const e=document.getElementById("external-events");new $._l(e,{itemSelector:".fc-event",eventData:function(e){return{title:e.getAttribute("title"),color:e.getAttribute("data-color")}}})}),[]);return u.createElement(N,{id:"external-events"},u.createElement(c.Z.Title,{level:4},"Events"),[{title:"Meeting Event",color:"#ed2559"},{title:"Team Seminar",color:"#2550ed"},{title:"Company Meeting",color:"#1a9748"},{title:"Team Ceremony",color:"#ed25ed"},{title:"End-Year Meeting",color:"#183a7a"}].map(((e,t)=>u.createElement(A,{key:`event-${t}`,color:e.color,title:e.title,"data-color":e.color,className:"single-event fc-event"},e.title))))};const N=p.ZP.div`
  padding: 16px;
`,A=p.ZP.div`
  background: #fff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid ${e=>e.color};
  border-left-width: 8px;
  cursor: move;
  color: ${e=>e.theme.colors.main};
`;var G=a(33279),H=a(5576);(new Date).toISOString().replace(/T.*$/,"");const V={center:"title",left:"prev,next today",right:"dayGridMonth,timeGridWeek,timeGridDay"};var L=({events:e,onClickEvent:t,onCreateEvent:a,onCreateByDrag:n})=>u.createElement(q,null,u.createElement(r.ZPm,{selectable:!0,dayMaxEvents:!0,droppable:!0,events:e,drop:e=>{const t={start_date:m()(e.dateStr).format("YYYY-MM-DD"),end_date:m()(e.dateStr).format("YYYY-MM-DD"),start_time:m()(e.dateStr).format("HH:mm"),end_time:m()(e.dateStr).format("HH:mm")},a=Object.assign(Object.assign({},t),{is_full_day:e.allDay,is_repeating:!1,title:e.draggedEl.title,color:e.draggedEl.dataset.color});n(a)},select:a,eventClick:t,initialView:"dayGridMonth",headerToolbar:V,plugins:[G.ZP,$.ZP,H.ZP],eventTimeFormat:{hour:"2-digit",minute:"2-digit",hour12:!1}}));const q=p.ZP.div`
  height: 100%;
  width: 100%;

  & .fc-toolbar-chunk {
    & button.fc-button {
      text-transform: capitalize;
    }
  }

  & .fc-dayGridMonth-view {
    & td,
    th {
      border: none !important;
    }

    & .fc-scrollgrid {
      border-radius: 16px;
      overflow: hidden;
      background: #e7ebf2;
      border: none !important;
      padding: 8px;
    }

    & .fc-col-header-cell.fc-day {
      background: #e7ebf2;
      border: none !important;

      & .fc-scrollgrid-sync-inner {
        padding: 16px 0 4px 0;
      }
    }

    & .fc-daygrid-day {
      padding: 4px;
      background: #e7ebf2;
      border: none !important;

      &.fc-day-today {
        background: #e7ebf2 !important;

        & .fc-daygrid-day-frame {
          border: 2px solid ${e=>e.theme.colors.secondary};
        }
      }

      & .fc-daygrid-day-frame {
        background: #fff;
        border-radius: 16px;

        & .fc-daygrid-day-top {
          padding: 4px;
          font-size: 1.1rem;
        }
      }
    }
  }
`;var B=a(79435),z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var K=({calendarId:e,calendarEvents:t,afterEventCreate:a,afterEventUpdate:r,afterEventDelete:s})=>{const{t:p}=(0,f.$)(),[E,g]=u.useState(!1),[v,b]=u.useState(!1),[y,h]=u.useState([]),[Z,C]=u.useState(),[x,D]=u.useState(),O=(0,u.useCallback)((()=>{t.length&&h(t.map((e=>({title:e.title,color:e.color,id:String(e.id),allDay:e.is_full_day,end:`${e.end_date}T${e.end_time}`,start:`${e.start_date}T${e.start_time}`}))))}),[t]);(0,u.useEffect)((()=>{O()}),[t]);const _=t=>{const{calendarCategories:n}=t,l=z(t,["calendarCategories"]),i=Object.assign(Object.assign({},l),{calendar_id:Number(e),calendar_category_ids:(n||[]).map((e=>e.id))});b(!0),x?(0,B.KI)(x.id,i).then((e=>{b(!1),g(!1),D(void 0),r(e)})).catch((()=>b(!1))):(0,B.fE)(i).then((e=>{b(!1),g(!1),C(void 0),a(e)})).catch((()=>b(!1)))},S=()=>{g(!1),C(void 0),D(void 0)};return u.createElement(R,null,u.createElement(i.Z,{gutter:[16,16],className:"calendar"},u.createElement(o.Z,{span:18},u.createElement(L,{events:y,onClickEvent:e=>{const a=t.find((t=>t.id===Number(e.event.id)));a&&(D(a),g(!0))},onCreateByDrag:_,onCreateEvent:e=>{if(m()(e.start).isSameOrAfter(m()())){const t=m()(e.startStr),a=m()(e.endStr),n=a.diff(t,"days");C(n>1?[t.format("YYYY-MM-DD"),a.format("YYYY-MM-DD")]:t.format("YYYY-MM-DD")),g(!0)}e.view.calendar.unselect()}})),u.createElement(o.Z,{span:6},u.createElement(U,{onClick:()=>g(!0)},u.createElement(c.Z.Title,{level:4},"Create Event"),u.createElement(n.Z,null)),u.createElement(d.Z,{width:500,footer:!1,destroyOnClose:!0,closable:!0,visible:E,onCancel:S,title:u.createElement(l.xB,{onClose:S,items:[{path:"",breadcrumbName:p("Calendar.Event.Title")}]})},u.createElement(j,{initDate:Z,isPending:v,onSubmit:_,initialValues:x,onEventDelete:()=>{x&&(b(!0),(0,B.d1)(x.id).then((()=>{b(!1),g(!1),D(void 0),s(x.id)})).catch((()=>b(!1))))}})),u.createElement(T,null))))};const R=p.ZP.div`
  display: flex;
  min-height: 100%;

  & .calendar {
    width: 100%;
    min-height: 700px;
  }
`,U=p.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 16px;
  border-radius: 16px;
  margin-top: 60px;
  cursor: pointer;
  background: ${e=>e.theme.colors.main};

  & h4 {
    margin: 0;
    color: #fff;
  }
`}}]);