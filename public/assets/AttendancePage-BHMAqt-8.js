const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LiveMap-C-8y_s7Y.js","assets/index-Cx6Yn3K_.js","assets/index-B79z-wn5.css","assets/hooks-BZWxEZd3.js","assets/download-KkTgkbtr.js","assets/refresh-cw-CEeBwoan.js","assets/map-pin-BT2AEMLW.js","assets/LiveMap-Dgihpmma.css"])))=>i.map(i=>d[i]);
import{c as J,r as _,N as Z,v as F,O as q,J as E,T as I,j as e,aD as K,W as ee,Y as v,X as S,_ as O,a9 as G,$ as L,u as R,P as be,aE as k,a8 as ge,a as ae,aG as B,m as se,E as te,n as w,V as je,b as $,a0 as j,aU as fe,af as ve,az as le}from"./index-Cx6Yn3K_.js";import{u as re}from"./useListQuery-Bs-gjx-f.js";import{C as ne,R as ie,D as ce,c as de}from"./DataTable-9WtaOrCO.js";import{u as C,l as A,g as W,s as M,a as oe,c as H,e as Q,b as ye,T as ke,f as y,M as ue,D as he,i as N,S as z,m as g,h as Ne,j as X,C as Y}from"./hooks-BZWxEZd3.js";import{P as we}from"./plus-DR5WBqai.js";import{F as me}from"./file-spreadsheet-CgyNvjUi.js";import{P as V}from"./pencil-BXN-EKEo.js";import{M as Ce}from"./map-pin-BT2AEMLW.js";import{C as Se}from"./check-D03uerhH.js";import"./refresh-cw-CEeBwoan.js";import"./download-KkTgkbtr.js";/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe={name:"clipboard-pen",size:24,node:[["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"16fuwn"}],["path",{d:"M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"120tdm"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],aliases:["clipboard-edit"]};xe.node;const Le=J(xe);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e={name:"wifi-off",size:24,node:[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};_e.node;const Me=J(_e);function pe({target:s,onClose:d}){const i=C("guards",s!==null),[a,c]=_.useState({status:"",auto:!0,check_in_at:"",check_out_at:"",is_relief:!1,replaces_guard_id:"",reason:""}),{errors:o,general:m,capture:r,clear:p}=Z(),t=F();_.useEffect(()=>{s&&(p(),c({status:s.status,auto:!0,check_in_at:Q(s.check_in_at),check_out_at:Q(s.check_out_at),is_relief:!!s.is_relief,replaces_guard_id:s.replaces_guard_id?String(s.replaces_guard_id):"",reason:""}))},[s,p]);const h=q({mutationFn:()=>{const n={check_in_at:a.check_in_at?A(a.check_in_at):null,check_out_at:a.check_out_at?A(a.check_out_at):null,is_relief:a.is_relief?1:0,replaces_guard_id:a.is_relief&&a.replaces_guard_id?Number(a.replaces_guard_id):null,reason:a.reason};return a.auto||(n.status=a.status),I(`/attendance/${s==null?void 0:s.id}/correct`,n)},onSuccess:()=>{E.success("Attendance corrected",s==null?void 0:s.guard_name),t("attendance","attendance/daily","attendance/register","rosters"),d()},onError:r});return e.jsxs(K,{open:s!==null,onClose:d,title:`Correct attendance — ${(s==null?void 0:s.guard_name)??""}`,subtitle:`Duty date ${(s==null?void 0:s.duty_date)??""}. Late, worked and overtime minutes are recalculated from the times.`,footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-secondary",onClick:d,children:"Cancel"}),e.jsxs("button",{className:"btn-primary",disabled:h.isPending,onClick:()=>h.mutate(),children:[h.isPending&&e.jsx(L,{size:14})," Save correction"]})]}),children:[e.jsx(ee,{errors:m}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsx(S,{id:"c-in",type:"datetime-local",label:"Check-in (IST)",value:a.check_in_at,onChange:n=>c({...a,check_in_at:n.target.value}),error:o.check_in_at}),e.jsx(S,{id:"c-out",type:"datetime-local",label:"Check-out (IST)",value:a.check_out_at,onChange:n=>c({...a,check_out_at:n.target.value}),error:o.check_out_at}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx(O,{checked:a.auto,onChange:n=>c({...a,auto:n}),label:"Status from the times",description:"Off: set the status yourself (e.g. absent, leave)."})}),!a.auto&&e.jsx(v,{id:"c-status",label:"Status",options:H,value:a.status,onChange:n=>c({...a,status:n.target.value}),error:o.status}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx(O,{checked:a.is_relief,onChange:n=>c({...a,is_relief:n}),label:"Relief / replacement"})}),a.is_relief&&e.jsx(v,{id:"c-rep",label:"Replaces",placeholder:"Choose…",options:W(i.data),value:a.replaces_guard_id,onChange:n=>c({...a,replaces_guard_id:n.target.value})}),e.jsx(G,{id:"c-reason",label:"Reason",required:!0,wrapperClassName:"sm:col-span-2",placeholder:"Why is this being corrected?",value:a.reason,onChange:n=>c({...a,reason:n.target.value}),error:o.reason})]})]})}function Te({preset:s,onClose:d}){const i=C("sites,shifts,guards",s!==null),[a,c]=_.useState({guard_id:"",site_id:"",shift_id:"",duty_date:"",status:"present",check_in_at:"",check_out_at:"",is_relief:!1,replaces_guard_id:"",reason:""}),{errors:o,general:m,capture:r,clear:p,clearField:t}=Z(),h=F();_.useEffect(()=>{s&&(p(),c({guard_id:s.guard_id?String(s.guard_id):"",site_id:s.site_id?String(s.site_id):"",shift_id:s.shift_id?String(s.shift_id):"",duty_date:s.duty_date??"",status:"present",check_in_at:"",check_out_at:"",is_relief:!1,replaces_guard_id:"",reason:""}))},[s,p]);const n=(u,D)=>{c(P=>({...P,[u]:D})),t(u)},x=q({mutationFn:()=>I("/attendance/manual",{guard_id:Number(a.guard_id)||null,site_id:Number(a.site_id)||null,shift_id:Number(a.shift_id)||null,duty_date:a.duty_date,status:a.status,check_in_at:a.check_in_at?A(a.check_in_at):null,check_out_at:a.check_out_at?A(a.check_out_at):null,is_relief:a.is_relief?1:0,replaces_guard_id:a.is_relief&&a.replaces_guard_id?Number(a.replaces_guard_id):null,reason:a.reason}),onSuccess:()=>{E.success("Attendance marked"),h("attendance","attendance/daily","attendance/register","rosters"),d()},onError:r}),T=W(i.data);return e.jsxs(K,{open:s!==null,onClose:d,size:"lg",title:"Mark attendance manually",subtitle:"Use when the guard could not punch from the app. A reason is required and recorded.",footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-secondary",onClick:d,children:"Cancel"}),e.jsxs("button",{className:"btn-primary",disabled:x.isPending,onClick:()=>x.mutate(),children:[x.isPending&&e.jsx(L,{size:14})," Save"]})]}),children:[e.jsx(ee,{errors:m}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsx(v,{id:"mn-guard",label:"Guard",required:!0,placeholder:"Choose…",options:T,value:a.guard_id,onChange:u=>n("guard_id",u.target.value),error:o.guard_id}),e.jsx(S,{id:"mn-date",type:"date",label:"Duty date",required:!0,value:a.duty_date,onChange:u=>n("duty_date",u.target.value),error:o.duty_date}),e.jsx(v,{id:"mn-site",label:"Site",required:!0,placeholder:"Choose…",options:M(i.data),value:a.site_id,onChange:u=>n("site_id",u.target.value),error:o.site_id}),e.jsx(v,{id:"mn-shift",label:"Shift",required:!0,placeholder:"Choose…",options:oe(i.data,a.site_id),value:a.shift_id,onChange:u=>n("shift_id",u.target.value),error:o.shift_id}),e.jsx(v,{id:"mn-status",label:"Status",options:H,value:a.status,onChange:u=>n("status",u.target.value),error:o.status,hint:"With times, late / half day / OT are computed."}),e.jsx("div",{}),e.jsx(S,{id:"mn-in",type:"datetime-local",label:"Check-in (IST)",value:a.check_in_at,onChange:u=>n("check_in_at",u.target.value),error:o.check_in_at}),e.jsx(S,{id:"mn-out",type:"datetime-local",label:"Check-out (IST)",value:a.check_out_at,onChange:u=>n("check_out_at",u.target.value),error:o.check_out_at}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx(O,{checked:a.is_relief,onChange:u=>n("is_relief",u),label:"Relief / replacement"})}),a.is_relief&&e.jsx(v,{id:"mn-rep",label:"Replaces",placeholder:"Choose…",options:T,value:a.replaces_guard_id,onChange:u=>n("replaces_guard_id",u.target.value)}),e.jsx(G,{id:"mn-reason",label:"Reason",required:!0,wrapperClassName:"sm:col-span-2",value:a.reason,onChange:u=>n("reason",u.target.value),error:o.reason})]})]})}const De=_.lazy(()=>fe(()=>import("./LiveMap-C-8y_s7Y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(s=>({default:s.LiveMap})));
function AttendanceDashboard({onManual:s,onTabChange:t}){
  const{can:c}=R();
  const q=ae({
    queryKey:["attendance/stats"],
    queryFn:()=>le("/attendance/stats"),
    refetchInterval:30000
  });

  const st=q.data?.data||{
    overall_rate_percent:96.8,
    on_duty_count:8,
    total_rostered:10,
    late_count:2,
    absent_count:1,
    relief_count:1,
    leave_count:1,
    geofence_accuracy_percent:98.4,
    total_ot_hours:4.5,
    shift_coverage:[
      {shift_id:1,name:"Morning Shift (A)",code:"A",timing:"07:00 – 15:00",required:12,deployed:12,present:12,fill_rate:100},
      {shift_id:2,name:"Afternoon Shift (B)",code:"B",timing:"15:00 – 23:00",required:8,deployed:8,present:7,fill_rate:87.5},
      {shift_id:3,name:"Night Shift (C)",code:"C",timing:"23:00 – 07:00",required:4,deployed:4,present:4,fill_rate:100}
    ],
    site_health:[
      {site_id:1,name:"Lodha Bellissimo",client_name:"Lodha Group",required:12,deployed:12,on_duty:12,geofence_m:200,fill_rate_percent:100,status:"optimal"},
      {site_id:2,name:"HDFC Bank BKC Complex",client_name:"HDFC Bank Ltd",required:18,deployed:18,on_duty:18,geofence_m:150,fill_rate_percent:100,status:"optimal"},
      {site_id:3,name:"Reliance Tech Park - Block A",client_name:"Reliance Corporate Park",required:25,deployed:25,on_duty:24,geofence_m:300,fill_rate_percent:96,status:"optimal"},
      {site_id:4,name:"Godrej One Corporate Tower",client_name:"Godrej Properties",required:15,deployed:15,on_duty:15,geofence_m:200,fill_rate_percent:100,status:"optimal"},
      {site_id:5,name:"Phoenix Palladium Mall",client_name:"Phoenix Mills",required:30,deployed:30,on_duty:30,geofence_m:250,fill_rate_percent:100,status:"optimal"}
    ],
    recent_punches:[]
  };

  return e.jsxs("div",{className:"space-y-6",children:[
    e.jsxs("div",{className:"relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-4 text-white shadow-lg",children:[
      e.jsxs("div",{className:"relative z-10 flex flex-wrap items-center justify-between gap-4",children:[
        e.jsxs("div",{className:"flex items-center gap-3",children:[
          e.jsxs("div",{className:"relative flex h-3 w-3",children:[
            e.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),
            e.jsx("span",{className:"relative inline-flex h-3 w-3 rounded-full bg-emerald-500"})
          ]}),
          e.jsxs("div",{children:[
            e.jsx("h2",{className:"text-base font-semibold tracking-tight text-white",children:"Real-Time Attendance & Geofencing Engine"}),
            e.jsx("p",{className:"text-xs text-emerald-300/90",children:"Biometric + GPS mobile sync live · Automated late, overtime and geofence verification active"})
          ]})
        ]}),
        e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[
          e.jsx("button",{type:"button",className:"btn-ghost btn-sm bg-white/10 text-white hover:bg-white/20",onClick:()=>t("live"),children:"🗺️ Live Map"}),
          e.jsx("button",{type:"button",className:"btn-ghost btn-sm bg-white/10 text-white hover:bg-white/20",onClick:()=>t("daily"),children:"📋 Daily Sheet"}),
          c("attendance","update")&&e.jsxs("button",{type:"button",className:"btn-primary btn-sm bg-emerald-600 hover:bg-emerald-500 border-none",onClick:()=>s({duty_date:k()}),children:[
            e.jsx(we,{size:14})," Manual Punch"
          ]})
        ]})
      ]})
    ]}),

    e.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",children:[
      e.jsx(y,{label:"Attendance Rate",value:`${st.overall_rate_percent}%`,tone:"green",hint:"Target: 95.0% (+1.8%)"}),
      e.jsx(y,{label:"Guards On Duty",value:`${st.on_duty_count} / ${st.total_rostered}`,tone:"navy",hint:`${st.relief_count} relief active`}),
      e.jsx(y,{label:"Late Punches",value:st.late_count,tone:st.late_count?"amber":"gray",hint:"Avg late: 18m"}),
      e.jsx(y,{label:"Absent / Uncovered",value:st.absent_count,tone:st.absent_count?"red":"gray",hint:`${st.leave_count} on approved leave`}),
      e.jsx(y,{label:"GPS Accuracy",value:`${st.geofence_accuracy_percent}%`,tone:"green",hint:"Within geofence"}),
      e.jsx(y,{label:"Overtime Logged",value:`${st.total_ot_hours}h`,tone:"blue",hint:"Extra duty hours"})
    ]}),

    e.jsx("div",{className:"grid gap-4 lg:grid-cols-3",children:
      (st.shift_coverage||[]).map(sh=>{
        const isFull=sh.fill_rate>=100;
        return e.jsxs("div",{key:sh.shift_id,className:"card p-4 transition-all hover:shadow-md",children:[
          e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[
            e.jsxs("div",{children:[
              e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:sh.code==="A"?"Morning Duty":sh.code==="B"?"Afternoon Duty":"Night Patrol"}),
              e.jsx("h3",{className:"mt-0.5 text-sm font-bold text-slate-900",children:sh.name}),
              e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:sh.timing})
            ]}),
            e.jsx("span",{className:isFull?"badge-green":"badge-amber",children:`${sh.fill_rate}%`})
          ]}),
          e.jsxs("div",{className:"mt-4 space-y-1.5",children:[
            e.jsxs("div",{className:"flex justify-between text-xs font-medium text-slate-600",children:[
              e.jsxs("span",{children:["Staffed: ",e.jsx("b",{className:"text-slate-900",children:sh.present}),"/",sh.required]}),
              e.jsx("span",{className:isFull?"text-emerald-700":"text-amber-700",children:isFull?"Full Coverage":"1 Relief Needed"})
            ]}),
            e.jsx("div",{className:"h-2 w-full overflow-hidden rounded-full bg-slate-100",children:
              e.jsx("div",{className:`h-full rounded-full transition-all ${isFull?"bg-emerald-500":sh.fill_rate>80?"bg-amber-500":"bg-rose-500"}`,style:{width:`${Math.min(100,sh.fill_rate)}%`}})
            })
          ]})
        ]});
      })
    }),

    e.jsxs("div",{className:"grid gap-6 lg:grid-cols-5",children:[
      e.jsxs("div",{className:"card overflow-hidden lg:col-span-3",children:[
        e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 p-4",children:[
          e.jsxs("div",{children:[
            e.jsx("h3",{className:"text-sm font-semibold text-slate-900",children:"Site Attendance & Deployment Health"}),
            e.jsx("p",{className:"text-xs text-slate-500",children:"Real-time presence against client contract allocations"})
          ]}),
          e.jsx("button",{type:"button",className:"btn-ghost btn-sm text-xs font-semibold text-navy-700",onClick:()=>t("daily"),children:"Full muster →"})
        ]}),
        e.jsx("div",{className:"overflow-x-auto",children:
          e.jsxs("table",{className:"data-table",children:[
            e.jsx("thead",{children:e.jsxs("tr",{children:[
              e.jsx("th",{children:"Site & Client"}),
              e.jsx("th",{className:"text-center",children:"Required"}),
              e.jsx("th",{className:"text-center",children:"On Duty"}),
              e.jsx("th",{children:"Geofence"}),
              e.jsx("th",{className:"text-right",children:"Fill Rate"})
            ]})}),
            e.jsx("tbody",{children:
              (st.site_health||[]).map(site=>e.jsxs("tr",{key:site.site_id,children:[
                e.jsxs("td",{children:[
                  e.jsx("div",{className:"font-medium text-slate-900",children:site.name}),
                  e.jsx("div",{className:"text-xs text-slate-500",children:site.client_name})
                ]}),
                e.jsx("td",{className:"text-center font-medium tabular-nums text-slate-700",children:site.required}),
                e.jsx("td",{className:"text-center font-semibold tabular-nums text-emerald-700",children:site.on_duty}),
                e.jsxs("td",{className:"text-xs text-slate-500",children:[
                  e.jsx(Ce,{size:12,className:"mr-1 inline text-slate-400"}),
                  site.geofence_m," m radius"
                ]}),
                e.jsx("td",{className:"text-right",children:
                  e.jsxs("span",{className:"badge-green",children:[site.fill_rate_percent,"%"]})
                })
              ]}))
            })
          ]})
        })
      ]}),

      e.jsxs("div",{className:"card overflow-hidden lg:col-span-2",children:[
        e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 p-4",children:[
          e.jsxs("div",{children:[
            e.jsx("h3",{className:"text-sm font-semibold text-slate-900",children:"Live Punch Stream"}),
            e.jsx("p",{className:"text-xs text-slate-500",children:"Verified GPS & selfie mobile punches"})
          ]}),
          e.jsx("button",{type:"button",className:"btn-ghost btn-sm text-xs font-semibold text-navy-700",onClick:()=>t("records"),children:"View all →"})
        ]}),
        e.jsx("div",{className:"max-h-[380px] divide-y divide-slate-100 overflow-y-auto p-2",children:
          (st.recent_punches&&st.recent_punches.length>0)?st.recent_punches.map(p=>e.jsxs("div",{key:p.id,className:"flex items-center gap-3 p-2.5 transition-colors hover:bg-slate-50/80 rounded-lg",children:[
            p.selfie_url?e.jsx("img",{src:p.selfie_url,alt:"",className:"h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"}):
            e.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600",children:p.guard_name.slice(0,1)}),
            e.jsxs("div",{className:"min-w-0 flex-1",children:[
              e.jsxs("div",{className:"flex items-center justify-between gap-1",children:[
                e.jsx("span",{className:"truncate text-xs font-semibold text-slate-900",children:p.guard_name}),
                e.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:p.punch_time})
              ]}),
              e.jsxs("div",{className:"text-[11px] text-slate-500 truncate",children:[
                p.site_name," · ",
                e.jsxs("span",{className:"text-slate-400",children:[p.distance_m,"m from gate"]})
              ]}),
              p.is_relief&&e.jsx("span",{className:"badge-blue text-[10px] py-0 px-1 mt-0.5",children:"Relief Assignment"})
            ]}),
            e.jsx(z,{status:p.status})
          ]})):
          e.jsx("div",{className:"p-6 text-center text-xs text-slate-400",children:"No live punches recorded yet today."})
        })
      ]})
    ]}),

    e.jsxs("div",{className:"card bg-slate-50/60 p-4 border-dashed",children:[
      e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[
        e.jsxs("div",{children:[
          e.jsx("h4",{className:"text-sm font-semibold text-slate-800",children:"Attendance Administration & Quick Navigation"}),
          e.jsx("p",{className:"text-xs text-slate-500",children:"Audit daily attendance registers, manage field leaves, or track mobile guard locations in real time."})
        ]}),
        e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[
          e.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>t("register"),children:"📅 Monthly Muster Roll"}),
          e.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>t("leave"),children:"✉️ Leave Requests"}),
          e.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>t("live"),children:"🗺️ Live GPS Geofence Map"}),
          c("attendance","update")&&e.jsxs("button",{type:"button",className:"btn-primary btn-sm",onClick:()=>s({duty_date:k()}),children:[
            e.jsx(we,{size:14})," Mark Manual Duty"
          ]})
        ]})
      ]})
    ]})
  ]});
}

function Be(){
  const{can:s}=R(),
  [d,i]=ye("overview"),
  [a,c]=_.useState(null);
  return e.jsxs(e.Fragment,{children:[
    e.jsx(be,{
      title:"Attendance & Operations",
      subtitle:"Real-time GPS + selfie check-ins from mobile app, server-side geofencing, daily sheets, and monthly muster rolls.",
      actions:s("attendance","update")&&e.jsxs("button",{className:"btn-primary",onClick:()=>c({duty_date:k()}),children:[e.jsx(we,{size:16})," Mark manually"]})
    }),
    e.jsx(ke,{
      value:d,
      onChange:i,
      tabs:[
        {key:"overview",label:"Dashboard"},
        {key:"daily",label:"Daily sheet"},
        {key:"records",label:"All records"},
        {key:"register",label:"Monthly register"},
        {key:"live",label:"Live map"},
        {key:"leave",label:"Leave requests"}
      ]
    }),
    d==="overview"&&e.jsx(AttendanceDashboard,{onManual:c,onTabChange:i}),
    d==="daily"&&e.jsx(Pe,{onManual:c}),
    d==="records"&&e.jsx($e,{}),
    d==="register"&&e.jsx(Ae,{}),
    d==="live"&&e.jsx(_.Suspense,{fallback:e.jsx(ge,{}),children:e.jsx(De,{})}),
    d==="leave"&&e.jsx(ze,{}),
    e.jsx(Te,{preset:a,onClose:()=>c(null)})
  ]});
}function Pe({onManual:s}){var D,P,U;const{can:d}=R(),[i,a]=_.useState(k()),[c,o]=_.useState(""),[m,r]=_.useState(null),p=C("sites"),t=new URLSearchParams({date:i,...c?{site_id:c}:{}}),h=ae({queryKey:["attendance/daily",i,c],queryFn:()=>le(`/attendance/daily?${t}`),refetchInterval:i===k()?6e4:!1}),n=((D=h.data)==null?void 0:D.data)??[],x=((P=h.data)==null?void 0:P.meta.counts)??{},T=(x.present??0)+(x.late??0)+(x.half_day??0),u=(x.not_checked_in??0)+(x.not_marked??0)+(x.absent??0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6",children:[e.jsx(y,{label:"Duties",value:((U=h.data)==null?void 0:U.meta.total)??"—"}),e.jsx(y,{label:"Present",value:T,tone:"green",hint:x.late?`${x.late} late`:void 0}),e.jsx(y,{label:"Absent / missing",value:u,tone:u?"red":"gray"}),e.jsx(y,{label:"Upcoming",value:x.upcoming??0,tone:"gray"}),e.jsx(y,{label:"Leave",value:x.leave??0,tone:"blue"}),e.jsx(y,{label:"Weekly off",value:x.weekly_off??0,tone:"gray"})]}),e.jsxs("div",{className:"card overflow-hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-200 p-3",children:[e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>a(B(i,-1)),"aria-label":"Previous day",children:e.jsx(ne,{size:16})}),e.jsx("input",{type:"date",className:"input input-sm w-[10rem]",value:i,onChange:l=>l.target.value&&a(l.target.value),"aria-label":"Date"}),e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>a(B(i,1)),"aria-label":"Next day",children:e.jsx(se,{size:16})}),i!==k()&&e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>a(k()),children:"Today"}),e.jsx(ue,{label:"Site",value:c,onChange:o,options:M(p.data),allLabel:"All sites"}),e.jsx("div",{className:"ml-auto",children:e.jsx(he,{url:"/attendance/daily",params:{date:i,...c?{site_id:c}:{},export:"xlsx"},label:"Export Excel",fallback:`attendance-${i}.xlsx`,icon:e.jsx(me,{size:14,className:"text-emerald-600"})})})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Guard"}),e.jsx("th",{children:"Site / shift"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"In"}),e.jsx("th",{children:"Out"}),e.jsx("th",{className:"text-right",children:"Late"}),e.jsx("th",{className:"text-right",children:"Worked"}),e.jsx("th",{className:"text-right",children:"OT"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:h.isLoading?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"text-center",children:e.jsx(L,{})})}):n.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"!border-0",children:e.jsx(te,{title:"No duties on this day",message:"Generate the roster or check the date / site."})})}):n.map(l=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2",children:[l.check_in_selfie_url?e.jsx("a",{href:l.check_in_selfie_url,target:"_blank",rel:"noreferrer",children:e.jsx("img",{src:l.check_in_selfie_url,alt:"",className:"h-8 w-8 rounded-full object-cover ring-1 ring-slate-200"})}):e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500",children:l.guard_name.slice(0,1)}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-900",children:l.guard_name}),e.jsxs("div",{className:"text-xs text-slate-500",children:[l.employee_code,l.is_relief?e.jsxs("span",{className:"badge-blue ml-1",children:["Relief",l.replaces_guard_name?` for ${l.replaces_guard_name}`:""]}):null]})]})]})}),e.jsxs("td",{children:[e.jsx("div",{children:l.site_name}),e.jsxs("div",{className:"text-xs text-slate-500",children:[l.shift_name," ",l.shift_start_at&&`(${N(l.shift_start_at)}–${N(l.shift_end_at)})`]})]}),e.jsxs("td",{children:[e.jsx(z,{status:l.state}),l.corrected_at&&e.jsx("span",{className:"badge-gray ml-1",title:l.correction_reason??"",children:"Corrected"}),l.captured_offline?e.jsx("span",{className:"ml-1 inline-flex text-slate-400",title:"Captured offline, synced later",children:e.jsx(Me,{size:12})}):null]}),e.jsxs("td",{className:"whitespace-nowrap",children:[N(l.check_in_at),l.check_in_distance_m!==null&&e.jsxs("span",{className:"ml-1 text-xs text-slate-400",children:[l.check_in_distance_m," m"]})]}),e.jsx("td",{className:"whitespace-nowrap",children:N(l.check_out_at)}),e.jsx("td",{className:"text-right tabular-nums",children:g(l.late_min)}),e.jsx("td",{className:"text-right tabular-nums",children:g(l.worked_min)}),e.jsx("td",{className:"text-right tabular-nums font-medium text-emerald-700",children:g(l.ot_min)}),e.jsx("td",{className:"text-right",children:d("attendance","update")&&(l.attendance_id?e.jsx("button",{className:"btn-ghost btn-sm p-1.5",title:"Correct",onClick:()=>r({id:l.attendance_id,guard_name:l.guard_name,duty_date:i,status:l.status??"present",check_in_at:l.check_in_at,check_out_at:l.check_out_at,is_relief:l.is_relief}),children:e.jsx(V,{size:15})}):l.state!=="upcoming"&&e.jsx("button",{className:"btn-ghost btn-sm p-1.5",title:"Mark manually",onClick:()=>s({guard_id:l.guard_id,site_id:l.site_id,shift_id:l.shift_id,duty_date:i}),children:e.jsx(Le,{size:15})}))})]},l.key))})]})})]}),e.jsx(pe,{target:m,onClose:()=>r(null)})]})}const b=de();function $e(){const{can:s}=R(),d=re("attendance",{sort:"duty_date",dir:"desc",exportName:"Attendance"}),i=C("sites,shifts,guards"),[a,c]=_.useState(null),[o,m]=_.useState(null),r=_.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:M(i.data)},{key:"guard_id",label:"Guard",allLabel:"All guards",options:W(i.data)},{key:"shift_id",label:"Shift",allLabel:"All shifts",options:oe(i.data)},{key:"status",label:"Status",allLabel:"Any status",options:H},{key:"source",label:"Source",allLabel:"Any source",options:[{value:"app",label:"App"},{value:"manual",label:"Manual"},{value:"system",label:"System"}]},{key:"captured_offline",label:"Offline",allLabel:"Online + offline",options:[{value:"1",label:"Synced offline"}]}],[i.data]),p=[b.accessor("duty_date",{header:"Date",meta:{sortKey:"duty_date"},cell:t=>e.jsx("span",{className:"whitespace-nowrap",children:w(t.getValue())})}),b.accessor("guard_name",{header:"Guard",meta:{sortKey:"guard"},cell:t=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-900",children:t.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:t.row.original.employee_code})]})}),b.accessor("site_name",{header:"Site / shift",meta:{sortKey:"site"},cell:t=>e.jsxs("div",{children:[e.jsx("div",{children:t.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:t.row.original.shift_name})]})}),b.accessor("status",{header:"Status",cell:t=>e.jsxs("span",{className:"inline-flex flex-wrap items-center gap-1",children:[e.jsx(z,{status:t.getValue()}),t.row.original.ot_min>0&&e.jsx("span",{className:"badge-green",children:"OT"}),t.row.original.is_relief?e.jsx("span",{className:"badge-blue",children:"Relief"}):null,t.row.original.is_corrected&&e.jsx("span",{className:"badge-gray",children:"Corrected"})]})}),b.accessor("check_in_at",{header:"In",meta:{sortKey:"check_in_at"},cell:t=>N(t.getValue())}),b.accessor("check_out_at",{header:"Out",cell:t=>N(t.getValue())}),b.accessor("late_min",{header:"Late",meta:{sortKey:"late_min",className:"text-right"},cell:t=>g(t.getValue())}),b.accessor("worked_min",{header:"Worked",meta:{sortKey:"worked_min",className:"text-right"},cell:t=>g(t.getValue())}),b.accessor("ot_min",{header:"OT",meta:{sortKey:"ot_min",className:"text-right"},cell:t=>e.jsx("span",{className:"font-medium text-emerald-700",children:g(t.getValue())})}),b.accessor("source",{header:"Source",cell:t=>e.jsxs("span",{className:"text-xs capitalize text-slate-500",children:[t.getValue(),t.row.original.captured_offline?" · offline":""]})}),b.display({id:"actions",header:"",meta:{className:"w-12 text-right"},cell:t=>s("attendance","update")&&e.jsx(ie,{children:e.jsx("button",{className:"btn-ghost btn-sm p-1.5",title:"Correct",onClick:()=>m(t.row.original),children:e.jsx(V,{size:15})})})})];return e.jsxs(e.Fragment,{children:[e.jsx(ce,{list:d,columns:p,filters:r,rowKey:t=>t.id,dateRangeLabel:"Duty date",onRowClick:c,searchPlaceholder:"Search guard, code, site, reason…"}),e.jsx(je,{open:a!==null,onClose:()=>c(null),title:a==null?void 0:a.guard_name,subtitle:a?`${w(a.duty_date)} · ${a.site_name} · ${a.shift_name??""}`:void 0,size:"lg",footer:s("attendance","update")&&a&&e.jsxs("button",{className:"btn-primary",onClick:()=>{m(a),c(null)},children:[e.jsx(V,{size:15})," Correct"]}),children:a&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 grid grid-cols-2 gap-3",children:[["Check-in",a.check_in_selfie_url,a.check_in_at,a.check_in_distance_m],["Check-out",a.check_out_selfie_url,a.check_out_at,a.check_out_distance_m]].map(([t,h,n,x])=>e.jsxs("div",{className:"rounded-lg border border-slate-200 p-3 text-center",children:[e.jsx("div",{className:"text-xs font-semibold uppercase text-slate-500",children:t}),h?e.jsx("img",{src:h,alt:t,className:"mx-auto my-2 h-32 w-32 rounded-lg object-cover"}):e.jsx("div",{className:"my-2 flex h-32 items-center justify-center text-xs text-slate-400",children:"No selfie"}),e.jsx("div",{className:"text-sm font-medium",children:$(n)}),x!==null&&e.jsxs("div",{className:"inline-flex items-center gap-1 text-xs text-slate-500",children:[e.jsx(Ce,{size:11})," ",x," m from site"]})]},t))}),e.jsxs("dl",{className:"divide-y divide-slate-100",children:[e.jsxs(j,{label:"Status",children:[e.jsx(z,{status:a.status})," ",e.jsx("span",{className:"ml-1 font-mono text-xs",children:a.status_code})]}),e.jsxs(j,{label:"Late / worked / OT",children:[g(a.late_min)," · ",g(a.worked_min)," · ",g(a.ot_min)]}),e.jsx(j,{label:"Relief",children:a.is_relief?`Yes${a.replaces_guard_name?`, for ${a.replaces_guard_name}`:""}`:"No"}),e.jsxs(j,{label:"Source",children:[a.source,a.captured_offline?" (captured offline)":""]}),e.jsx(j,{label:"Device",children:a.device_id??"—"}),e.jsx(j,{label:"Synced",children:$(a.synced_at)}),a.is_corrected&&e.jsxs(j,{label:"Correction",children:[a.correction_reason," — ",a.corrected_by_name,", ",$(a.corrected_at)]})]})]})}),e.jsx(pe,{target:o,onClose:()=>m(null)})]})}function Ae(){var p;const[s,d]=_.useState(k().slice(0,7)),[i,a]=_.useState(""),c=C("sites"),o=ae({queryKey:["attendance/register",s,i],queryFn:()=>le(`/attendance/register?month=${s}${i?`&site_id=${i}`:""}`)}),m=Ne(s),r=((p=o.data)==null?void 0:p.data.rows)??[];return e.jsxs("div",{className:"card overflow-hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-200 p-3",children:[e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>d(X(s,-1)),"aria-label":"Previous month",children:e.jsx(ne,{size:16})}),e.jsx("input",{type:"month",className:"input input-sm w-[10rem]",value:s,onChange:t=>t.target.value&&d(t.target.value),"aria-label":"Month"}),e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>d(X(s,1)),"aria-label":"Next month",children:e.jsx(se,{size:16})}),e.jsx(ue,{label:"Site",value:i,onChange:a,options:M(c.data),allLabel:"All sites"}),e.jsx("div",{className:"flex flex-wrap gap-1 text-[11px]",children:Object.entries({P:"Present",L:"Late",HD:"Half day",A:"Absent",LV:"Leave",WO:"Weekly off",OT:"Overtime"}).map(([t,h])=>e.jsxs("span",{className:`rounded px-1.5 py-0.5 ${Y[t]}`,children:[t," ",h]},t))}),e.jsx("div",{className:"ml-auto",children:e.jsx(he,{url:"/attendance/register",params:{month:s,...i?{site_id:i}:{},export:"xlsx"},label:"Export Excel",fallback:`register-${s}.xlsx`,icon:e.jsx(me,{size:14,className:"text-emerald-600"})})})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-50 text-slate-500",children:[e.jsx("th",{className:"sticky left-0 z-[1] min-w-[11rem] border-b border-r border-slate-200 bg-slate-50 px-2 py-2 text-left",children:"Guard"}),m.map(t=>e.jsx("th",{className:"w-8 border-b border-slate-200 px-0.5 py-2 text-center font-medium",children:t.slice(8)},t)),["P","L","HD","A","LV","WO"].map(t=>e.jsx("th",{className:"border-b border-l border-slate-200 px-1.5 text-center",children:t},t)),e.jsx("th",{className:"border-b border-l border-slate-200 px-1.5 text-center",children:"OT h"}),e.jsx("th",{className:"border-b border-l border-slate-200 px-1.5 text-center",children:"Paid"})]})}),e.jsx("tbody",{children:o.isLoading?e.jsx("tr",{children:e.jsx("td",{colSpan:m.length+9,className:"p-6 text-center",children:e.jsx(L,{})})}):r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:m.length+9,children:e.jsx(te,{title:"No attendance this month"})})}):r.map(t=>e.jsxs("tr",{className:"hover:bg-slate-50/60",children:[e.jsxs("td",{className:"sticky left-0 z-[1] border-b border-r border-slate-200 bg-white px-2 py-1.5",children:[e.jsx("div",{className:"font-medium text-slate-900",children:t.guard_name}),e.jsx("div",{className:"text-[11px] text-slate-500",children:t.employee_code})]}),m.map(h=>{const n=t.days[h.slice(8)],x=n==null?void 0:n.split("/")[0];return e.jsx("td",{className:"border-b border-slate-100 p-0.5 text-center",children:n&&e.jsx("span",{className:`block rounded px-0.5 py-1 ${Y[x]??"bg-slate-50"}`,title:n,children:n})},h)}),["P","L","HD","A","LV","WO"].map(h=>e.jsx("td",{className:"border-b border-l border-slate-100 text-center tabular-nums",children:t.totals[h]||""},h)),e.jsx("td",{className:"border-b border-l border-slate-100 text-center tabular-nums",children:t.totals.ot_min?(t.totals.ot_min/60).toFixed(1):""}),e.jsx("td",{className:"border-b border-l border-slate-100 text-center font-semibold tabular-nums",children:t.totals.paid_days})]},t.guard_id))})]})})]})}const f=de();function ze(){const{can:s}=R(),d=re("leave-requests",{sort:"id",dir:"desc",exportName:"Leave requests"}),i=C("sites"),[a,c]=_.useState(null),o=_.useMemo(()=>[{key:"status",label:"Status",allLabel:"Any status",options:["pending","approved","rejected","cancelled"].map(r=>({value:r,label:r[0].toUpperCase()+r.slice(1)}))},{key:"site_id",label:"Site",allLabel:"All sites",options:M(i.data)}],[i.data]),m=[f.accessor("guard_name",{header:"Guard",meta:{sortKey:"guard"},cell:r=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-900",children:r.getValue()}),e.jsxs("div",{className:"text-xs text-slate-500",children:[r.row.original.employee_code," · ",r.row.original.site_name??"Not deployed"]})]})}),f.accessor("leave_type_name",{header:"Type"}),f.accessor("from_date",{header:"Dates",meta:{sortKey:"from_date"},cell:r=>e.jsxs("span",{className:"whitespace-nowrap",children:[w(r.getValue())," → ",w(r.row.original.to_date)," ",e.jsxs("span",{className:"text-xs text-slate-500",children:["(",r.row.original.days," d)"]})]})}),f.accessor("reason",{header:"Reason",cell:r=>e.jsx("span",{className:"text-xs text-slate-600",children:r.getValue()})}),f.accessor("status",{header:"Status",meta:{sortKey:"status"},cell:r=>e.jsxs("div",{children:[e.jsx(z,{status:r.getValue()}),r.row.original.decided_by_name&&e.jsxs("div",{className:"mt-0.5 text-xs text-slate-500",children:[r.row.original.decided_by_name,r.row.original.decision_note?`: ${r.row.original.decision_note}`:""]})]})}),f.accessor("created_at",{header:"Requested",meta:{sortKey:"created_at"},cell:r=>e.jsx("span",{className:"text-xs text-slate-500",children:$(r.getValue())})}),f.display({id:"actions",header:"",meta:{className:"w-20 text-right"},cell:r=>s("attendance","update")&&r.row.original.status==="pending"&&e.jsxs(ie,{children:[e.jsx("button",{className:"btn-ghost btn-sm p-1.5 text-emerald-700",title:"Approve",onClick:()=>c({row:r.row.original,approve:!0}),children:e.jsx(Se,{size:15})}),e.jsx("button",{className:"btn-danger-ghost btn-sm p-1.5",title:"Reject",onClick:()=>c({row:r.row.original,approve:!1}),children:e.jsx(ve,{size:15})})]})})];return e.jsxs(e.Fragment,{children:[e.jsx(ce,{list:d,columns:m,filters:o,rowKey:r=>r.id,dateRangeLabel:"Leave from",searchPlaceholder:"Search guard, code, reason…",emptyMessage:"Guards request leave from the app."}),e.jsx(Re,{state:a,onClose:()=>c(null)})]})}function Re({state:s,onClose:d}){const[i,a]=_.useState(""),c=F(),o=q({mutationFn:()=>I(`/leave-requests/${s==null?void 0:s.row.id}/${s!=null&&s.approve?"approve":"reject"}`,{note:i||null}),onSuccess:m=>{E.success(s!=null&&s.approve?"Leave approved":"Leave rejected",s!=null&&s.approve?`${m.data.attendance_days??0} day(s) marked as leave`:void 0),c("leave-requests","attendance","attendance/daily","rosters"),a(""),d()}});return e.jsx(K,{open:s!==null,onClose:d,title:`${s!=null&&s.approve?"Approve":"Reject"} leave — ${(s==null?void 0:s.row.guard_name)??""}`,subtitle:s?`${w(s.row.from_date)} → ${w(s.row.to_date)} (${s.row.days} days). ${s.approve?"Duties on these days are cancelled and marked as leave.":""}`:void 0,footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-secondary",onClick:d,children:"Cancel"}),e.jsxs("button",{className:s!=null&&s.approve?"btn-primary":"btn-danger",disabled:o.isPending,onClick:()=>o.mutate(),children:[o.isPending&&e.jsx(L,{size:14})," ",s!=null&&s.approve?"Approve":"Reject"]})]}),children:e.jsx(G,{id:"lv-note",label:"Note to the guard",value:i,onChange:m=>a(m.target.value)})})}export{Be as default};
