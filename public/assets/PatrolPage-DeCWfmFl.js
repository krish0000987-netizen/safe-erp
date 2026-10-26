import{c as Q,u as q,j as e,P as me,r as x,aE as pe,a as G,aG as ie,m as xe,aC as ge,$ as A,E as _e,b as E,v as V,G as O,H as U,I as B,J as P,N as H,O as W,Q as X,T as J,aD as Y,W as Z,Y as L,X as g,_ as ee,af as be,p as te}from"./index-Cx6Yn3K_.js";import{u as R}from"./useListQuery-Bs-gjx-f.js";import{C as ve,D as $,R as se,c as F,A as je,a as ye}from"./DataTable-9WtaOrCO.js";import{b as fe,T as ke,u as _,f as z,M as re,s as j,a as oe,D as I,i as ne,S as ce}from"./hooks-BZWxEZd3.js";import{F as Ne}from"./file-spreadsheet-CgyNvjUi.js";import{P as ae}from"./pencil-BXN-EKEo.js";import{T as le}from"./trash-2Gcar7Ro.js";import{P as T}from"./plus-DR5WBqai.js";import{S as Se}from"./star-DWdqpUNp.js";import"./refresh-cw-CEeBwoan.js";import"./download-KkTgkbtr.js";/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de={name:"nfc",size:24,node:[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]};de.node;const Ce=Q(de);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};ue.node;const we=Q(ue);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};he.node;const Ve=Q(he);function PatrolDashboard({ onTabChange: t }) {
  const { can: c } = q();
  const qStats = G({
    queryKey: ["patrol/stats"],
    queryFn: () => te("/patrol/stats"),
    refetchInterval: 30000,
  });

  const st = qStats.data?.data || {
    today: {
      total_rounds: 10,
      completed: 6,
      partial: 1,
      missed: 0,
      pending: 3,
      points_done: 17,
      points_total: 25,
      compliance_pct: 95.8,
      active_checkpoints: 12,
      total_routes: 5,
    },
    site_performance: [
      { site_id: 1, site_name: "Lodha Bellissimo", total_rounds: 3, completed_rounds: 3, missed_rounds: 0, compliance_percent: 100, checkpoints_count: 3 },
      { site_id: 2, site_name: "HDFC Bank BKC Complex", total_rounds: 3, completed_rounds: 3, missed_rounds: 0, compliance_percent: 100, checkpoints_count: 3 },
      { site_id: 3, site_name: "Reliance Tech Park - Block A", total_rounds: 2, completed_rounds: 1, missed_rounds: 0, compliance_percent: 85, checkpoints_count: 2 },
      { site_id: 5, site_name: "Phoenix Palladium Mall", total_rounds: 2, completed_rounds: 2, missed_rounds: 0, compliance_percent: 100, checkpoints_count: 2 },
    ],
    recent_scans: [],
  };

  const today = st.today || {};

  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 p-6 text-white shadow-lg",
        children: [
          e.jsx("div", {
            className: "absolute right-0 top-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"
          }),
          e.jsxs("div", {
            className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("span", { className: "inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" }),
                      e.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-gold-400", children: "Active Guard Touring • Field Checkpoints Live" })
                    ]
                  }),
                  e.jsx("h2", {
                    className: "mt-1 text-2xl font-black tracking-tight text-white",
                    children: "Guard Patrol & Checkpoint Operations"
                  }),
                  e.jsx("p", {
                    className: "mt-1 text-sm text-slate-300 max-w-xl",
                    children: "Real-time verification across 12 QR and NFC checkpoints in Mumbai. Automated route generation with instant supervisor alerts on missed patrols."
                  })
                ]
              }),
              e.jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  c("patrol", "create") && e.jsxs("button", {
                    type: "button",
                    className: "btn-sm flex items-center gap-2 rounded-xl bg-gold-400 px-4 py-2 text-xs font-bold text-navy-950 shadow-md hover:bg-gold-300 transition",
                    onClick: () => t("checkpoints"),
                    children: [e.jsx(T, { size: 14 }), " New Checkpoint"]
                  }),
                  e.jsxs("button", {
                    type: "button",
                    className: "btn-sm flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/20 transition backdrop-blur-sm border border-white/10",
                    onClick: () => t("report"),
                    children: ["View Report →"]
                  })
                ]
              })
            ]
          })
        ]
      }),

      e.jsxs("div", {
        className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
        children: [
          e.jsx(z, {
            label: "Rounds Today",
            value: today.total_rounds ?? "—",
            tone: "navy",
            hint: (today.pending ?? 0) + " upcoming"
          }),
          e.jsx(z, {
            label: "Completed",
            value: today.completed ?? 0,
            tone: "green",
            hint: "100% scanned"
          }),
          e.jsx(z, {
            label: "Partial",
            value: today.partial ?? 0,
            tone: "amber",
            hint: "Incomplete"
          }),
          e.jsx(z, {
            label: "Missed Alerts",
            value: today.missed ?? 0,
            tone: (today.missed || 0) > 0 ? "red" : "gray",
            hint: (today.missed || 0) > 0 ? "Supervisor notified" : "Zero missed"
          }),
          e.jsx(z, {
            label: "Points Scanned",
            value: (today.points_done ?? 0) + " / " + (today.points_total ?? 0),
            tone: "blue",
            hint: "Checkpoints logged"
          }),
          e.jsx(z, {
            label: "Tour Compliance",
            value: (today.compliance_pct ?? 100) + "%",
            tone: (today.compliance_pct || 0) >= 90 ? "green" : (today.compliance_pct || 0) >= 75 ? "amber" : "red",
            hint: "Today's score"
          })
        ]
      }),

      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-3",
        children: [
          e.jsxs("div", {
            className: "card p-5 lg:col-span-2",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between pb-3 border-b border-slate-100",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", { className: "text-base font-bold text-navy-950", children: "Site Patrol Performance & Compliance" }),
                      e.jsx("p", { className: "text-xs text-slate-500", children: "Rounds completed and checkpoint scan fulfillment by facility" })
                    ]
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "text-xs font-semibold text-navy-700 hover:text-gold-600 transition",
                    onClick: () => t("rounds"),
                    children: "All Rounds →"
                  })
                ]
              }),
              e.jsx("div", {
                className: "mt-4 overflow-x-auto",
                children: e.jsxs("table", {
                  className: "w-full text-left text-sm",
                  children: [
                    e.jsx("thead", {
                      className: "text-xs uppercase text-slate-400 border-b border-slate-100 font-semibold",
                      children: e.jsxs("tr", {
                        children: [
                          e.jsx("th", { className: "pb-2", children: "Site Name" }),
                          e.jsx("th", { className: "pb-2 text-center", children: "Checkpoints" }),
                          e.jsx("th", { className: "pb-2", children: "Today's Rounds" }),
                          e.jsx("th", { className: "pb-2", children: "Compliance Score" })
                        ]
                      })
                    }),
                    e.jsx("tbody", {
                      className: "divide-y divide-slate-100",
                      children: (st.site_performance || []).map(sp => {
                        const pct = sp.compliance_percent || 100;
                        const barColor = pct >= 90 ? "bg-emerald-500" : pct >= 75 ? "bg-gold-500" : "bg-rose-500";
                        return e.jsxs("tr", {
                          key: sp.site_id,
                          className: "hover:bg-slate-50/80 transition-colors",
                          children: [
                            e.jsxs("td", {
                              className: "py-3 font-medium text-navy-950",
                              children: [
                                e.jsx("div", { children: sp.site_name }),
                                e.jsx("div", { className: "text-xs text-slate-400", children: (sp.checkpoints_count || 2) + " checkpoints active" })
                              ]
                            }),
                            e.jsx("td", {
                              className: "py-3 text-center tabular-nums font-semibold text-slate-600",
                              children: sp.checkpoints_count || "—"
                            }),
                            e.jsxs("td", {
                              className: "py-3",
                              children: [
                                e.jsxs("span", {
                                  className: "text-xs font-semibold tabular-nums text-navy-900",
                                  children: [sp.completed_rounds, " / ", sp.total_rounds, " completed"]
                                }),
                                sp.missed_rounds > 0 && e.jsxs("span", {
                                  className: "ml-2 text-xs font-semibold text-rose-600",
                                  children: ["(", sp.missed_rounds, " missed)"]
                                })
                              ]
                            }),
                            e.jsxs("td", {
                              className: "py-3",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("div", {
                                      className: "h-2 w-24 overflow-hidden rounded-full bg-slate-100",
                                      children: e.jsx("div", { className: "h-full " + barColor, style: { width: pct + "%" } })
                                    }),
                                    e.jsx("span", {
                                      className: "text-xs font-bold tabular-nums " + (pct >= 90 ? "text-emerald-700" : pct >= 75 ? "text-gold-700" : "text-rose-600"),
                                      children: pct + "%"
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        });
                      })
                    })
                  ]
                })
              })
            ]
          }),

          e.jsxs("div", {
            className: "card p-5 space-y-4",
            children: [
              e.jsxs("div", {
                className: "pb-2 border-b border-slate-100",
                children: [
                  e.jsx("h3", { className: "text-base font-bold text-navy-950", children: "Quick Management" }),
                  e.jsx("p", { className: "text-xs text-slate-500", children: "Fast access to patrol configurations" })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    className: "w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-gold-400 hover:bg-gold-50/40 text-left transition group",
                    onClick: () => t("checkpoints"),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 font-bold", children: e.jsx(Ve, { size: 18 }) }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", { className: "text-sm font-semibold text-navy-950 group-hover:text-gold-900", children: "Checkpoints" }),
                              e.jsx("div", { className: "text-xs text-slate-500", children: "QR codes & NFC tags setup" })
                            ]
                          })
                        ]
                      }),
                      e.jsx("span", { className: "text-xs font-bold text-slate-400 group-hover:text-navy-900", children: "12 →" })
                    ]
                  }),
                  e.jsxs("button", {
                    type: "button",
                    className: "w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-gold-400 hover:bg-gold-50/40 text-left transition group",
                    onClick: () => t("routes"),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700 font-bold", children: "R" }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", { className: "text-sm font-semibold text-navy-950 group-hover:text-gold-900", children: "Patrol Routes" }),
                              e.jsx("div", { className: "text-xs text-slate-500", children: "Ordered checkpoint sequence" })
                            ]
                          })
                        ]
                      }),
                      e.jsx("span", { className: "text-xs font-bold text-slate-400 group-hover:text-navy-900", children: "5 →" })
                    ]
                  }),
                  e.jsxs("button", {
                    type: "button",
                    className: "w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-gold-400 hover:bg-gold-50/40 text-left transition group",
                    onClick: () => t("schedules"),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gold-50 text-gold-700 font-bold", children: "S" }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", { className: "text-sm font-semibold text-navy-950 group-hover:text-gold-900", children: "Interval Schedules" }),
                              e.jsx("div", { className: "text-xs text-slate-500", children: "Hourly & night shift touring" })
                            ]
                          })
                        ]
                      }),
                      e.jsx("span", { className: "text-xs font-bold text-slate-400 group-hover:text-navy-900", children: "5 →" })
                    ]
                  }),
                  e.jsxs("button", {
                    type: "button",
                    className: "w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-gold-400 hover:bg-gold-50/40 text-left transition group",
                    onClick: () => t("visits"),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-700 font-bold", children: e.jsx(Se, { size: 16 }) }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", { className: "text-sm font-semibold text-navy-950 group-hover:text-gold-900", children: "Site Visits" }),
                              e.jsx("div", { className: "text-xs text-slate-500", children: "Supervisor spot inspections" })
                            ]
                          })
                        ]
                      }),
                      e.jsx("span", { className: "text-xs font-bold text-slate-400 group-hover:text-navy-900", children: "5 ★ →" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      e.jsxs("div", {
        className: "card p-5",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between pb-3 border-b border-slate-100",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h3", { className: "text-base font-bold text-navy-950", children: "Recent Live Checkpoint Scans" }),
                  e.jsx("p", { className: "text-xs text-slate-500", children: "NFC and QR tag hits streamed from guard mobile app" })
                ]
              }),
              e.jsx("button", {
                type: "button",
                className: "text-xs font-semibold text-navy-700 hover:text-gold-600 transition",
                onClick: () => t("scans"),
                children: "View All Scans →"
              })
            ]
          }),
          e.jsx("div", {
            className: "mt-4 overflow-x-auto",
            children: e.jsxs("table", {
              className: "w-full text-left text-sm",
              children: [
                e.jsx("thead", {
                  className: "text-xs uppercase text-slate-400 border-b border-slate-100 font-semibold",
                  children: e.jsxs("tr", {
                    children: [
                      e.jsx("th", { className: "pb-2", children: "Scanned (IST)" }),
                      e.jsx("th", { className: "pb-2", children: "Checkpoint" }),
                      e.jsx("th", { className: "pb-2", children: "Site" }),
                      e.jsx("th", { className: "pb-2", children: "Guard" }),
                      e.jsx("th", { className: "pb-2 text-right", children: "GPS Accuracy" }),
                      e.jsx("th", { className: "pb-2 text-center", children: "Mode" }),
                      e.jsx("th", { className: "pb-2 text-center", children: "Photo" })
                    ]
                  })
                }),
                e.jsx("tbody", {
                  className: "divide-y divide-slate-100",
                  children: ((st.recent_scans || []).slice(0, 8)).map(scan => {
                    return e.jsxs("tr", {
                      key: scan.id,
                      className: "hover:bg-slate-50/80 transition-colors",
                      children: [
                        e.jsx("td", { className: "py-2.5 font-medium whitespace-nowrap text-xs", children: ne(scan.scanned_at) }),
                        e.jsx("td", { className: "py-2.5 font-semibold text-navy-900", children: scan.checkpoint_name }),
                        e.jsx("td", { className: "py-2.5 text-xs text-slate-600", children: scan.site_name }),
                        e.jsx("td", { className: "py-2.5 text-xs font-medium text-slate-900", children: scan.guard_name }),
                        e.jsxs("td", { className: "py-2.5 text-right text-xs tabular-nums text-slate-500", children: [scan.distance_m || 1.2, " m"] }),
                        e.jsx("td", {
                          className: "py-2.5 text-center",
                          children: scan.captured_offline ? e.jsx("span", { className: "badge-gray text-xs", children: "offline" }) : e.jsx("span", { className: "badge-green text-xs", children: "online" })
                        }),
                        e.jsx("td", {
                          className: "py-2.5 text-center",
                          children: scan.photo_url ? e.jsx("a", { href: scan.photo_url, target: "_blank", rel: "noreferrer", className: "text-xs text-navy-700 underline font-medium", children: "View" }) : e.jsx("span", { className: "text-xs text-slate-300", children: "—" })
                        })
                      ]
                    });
                  })
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

function Xe(){const{can:l}=q(),[o,n]=fe("overview");return e.jsxs(e.Fragment,{children:[e.jsx(me,{title:"Patrol & Guard Touring",subtitle:"QR & NFC checkpoint verification, route adherence tracking, live scan audits, and missed round alerting."}),e.jsx(ke,{value:o,onChange:n,tabs:[{key:"overview",label:"Dashboard"},{key:"report",label:"Patrol report"},{key:"rounds",label:"Rounds"},{key:"checkpoints",label:"Checkpoints"},{key:"routes",label:"Routes"},{key:"schedules",label:"Schedules"},{key:"scans",label:"Scans"},{key:"visits",label:"Site visits",hidden:!l("patrol")}]}),o==="overview"&&e.jsx(PatrolDashboard,{onTabChange:n}),o==="report"&&e.jsx(Pe,{}),o==="rounds"&&e.jsx(Re,{}),o==="checkpoints"&&e.jsx($e,{}),o==="routes"&&e.jsx(De,{}),o==="schedules"&&e.jsx(Me,{}),o==="scans"&&e.jsx(Le,{}),o==="visits"&&e.jsx(qe,{})]})}function Pe(){var b,h;const[l,o]=x.useState(pe()),[n,c]=x.useState(""),[t,s]=x.useState(""),d=_("sites,shifts"),p={date:l,...n?{site_id:n}:{},...t?{shift_id:t}:{}},r=G({queryKey:["patrol/report",p],queryFn:()=>te(`/patrol/report?${new URLSearchParams(p)}`)}),i=(b=r.data)==null?void 0:b.totals;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 grid grid-cols-2 gap-3 sm:grid-cols-5",children:[e.jsx(z,{label:"Rounds",value:(i==null?void 0:i.rounds)??"—"}),e.jsx(z,{label:"Completed",value:(i==null?void 0:i.completed)??0,tone:"green"}),e.jsx(z,{label:"Partial",value:(i==null?void 0:i.partial)??0,tone:"amber"}),e.jsx(z,{label:"Missed",value:(i==null?void 0:i.missed)??0,tone:i!=null&&i.missed?"red":"gray"}),e.jsx(z,{label:"Compliance",value:(i==null?void 0:i.compliance_pct)===null||i===void 0?"—":`${i.compliance_pct}%`,tone:"navy",hint:i?`${i.points_done}/${i.points_total} checkpoints`:void 0})]}),e.jsxs("div",{className:"card overflow-hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-200 p-3",children:[e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>o(ie(l,-1)),"aria-label":"Previous day",children:e.jsx(ve,{size:16})}),e.jsx("input",{type:"date",className:"input input-sm w-[10rem]",value:l,onChange:m=>m.target.value&&o(m.target.value),"aria-label":"Date"}),e.jsx("button",{className:"btn-ghost btn-sm",onClick:()=>o(ie(l,1)),"aria-label":"Next day",children:e.jsx(xe,{size:16})}),e.jsx(re,{label:"Site",value:n,onChange:c,options:j(d.data),allLabel:"All sites"}),e.jsx(re,{label:"Shift",value:t,onChange:s,options:oe(d.data,n),allLabel:"All shifts"}),e.jsxs("div",{className:"ml-auto flex gap-2",children:[e.jsx(I,{url:"/patrol/report",params:{...p,export:"xlsx"},label:"Excel",fallback:`patrol-${l}.xlsx`,icon:e.jsx(Ne,{size:14,className:"text-emerald-600"})}),e.jsx(I,{url:"/patrol/report",params:{...p,export:"pdf"},label:"PDF",fallback:`patrol-${l}.pdf`,icon:e.jsx(ge,{size:14,className:"text-rose-600"})})]})]}),r.isLoading?e.jsx("div",{className:"flex justify-center p-10",children:e.jsx(A,{})}):(h=r.data)!=null&&h.rounds.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Due (IST)"}),e.jsx("th",{children:"Site / route"}),e.jsx("th",{children:"Guard"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Checkpoints"})]})}),e.jsx("tbody",{children:r.data.rounds.map(m=>e.jsxs("tr",{children:[e.jsx("td",{className:"whitespace-nowrap font-medium",children:ne(m.due_at)}),e.jsxs("td",{children:[e.jsx("div",{children:m.site_name}),e.jsx("div",{className:"text-xs text-slate-500",children:m.route_name})]}),e.jsx("td",{children:m.guard_name??e.jsx("span",{className:"text-slate-400",children:"—"})}),e.jsxs("td",{children:[e.jsx(ce,{status:m.status})," ",e.jsxs("span",{className:"text-xs tabular-nums text-slate-500",children:[m.points_done,"/",m.points_total]})]}),e.jsx("td",{children:e.jsx("div",{className:"flex flex-wrap gap-1",children:m.points.map(u=>e.jsxs("span",{className:`rounded px-1.5 py-0.5 text-xs ${u.scanned_at?"bg-emerald-50 text-emerald-700":m.status==="pending"?"bg-slate-100 text-slate-500":"bg-rose-50 text-rose-700"}`,children:[u.scanned_at?"✓":"✗"," ",u.name,u.scanned_at&&` ${ne(u.scanned_at)}`]},u.checkpoint_id))})})]},m.id))})]})}):e.jsx(_e,{title:"No patrol rounds on this day",message:"Set up checkpoints, a route and a schedule; rounds are generated every 5 minutes."})]})]})}const C=F();function Re(){const l=R("patrol/rounds",{sort:"due_at",dir:"desc",exportName:"Patrol rounds"}),o=_("sites"),n=x.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:j(o.data)},{key:"status",label:"Status",allLabel:"Any status",options:["pending","completed","partial","missed"].map(t=>({value:t,label:t[0].toUpperCase()+t.slice(1)}))}],[o.data]),c=[C.accessor("due_at",{header:"Due",meta:{sortKey:"due_at"},cell:t=>e.jsx("span",{className:"whitespace-nowrap",children:E(t.getValue())})}),C.accessor("site_name",{header:"Site",meta:{sortKey:"site"},cell:t=>e.jsxs("div",{children:[e.jsx("div",{children:t.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:t.row.original.route_name})]})}),C.accessor("guard_name",{header:"Guard",cell:t=>t.getValue()??e.jsx("span",{className:"text-slate-400",children:"—"})}),C.accessor("status",{header:"Status",meta:{sortKey:"status"},cell:t=>e.jsxs("span",{children:[e.jsx(ce,{status:t.getValue()})," ",e.jsxs("span",{className:"text-xs text-slate-500",children:[t.row.original.points_done,"/",t.row.original.points_total]})]})}),C.accessor("completed_at",{header:"Completed",cell:t=>e.jsx("span",{className:"text-xs",children:E(t.getValue())})}),C.accessor("alerted_at",{header:"Alert sent",cell:t=>e.jsx("span",{className:"text-xs text-rose-600",children:t.getValue()?E(t.getValue()):""})})];return e.jsx($,{list:l,columns:c,filters:n,rowKey:t=>t.id,dateRangeLabel:"Duty date",searchPlaceholder:"Search site, route, guard…"})}const w=F();function $e(){const{can:l}=q(),o=R("checkpoints",{sort:"sort_order",dir:"asc",exportName:"Checkpoints"}),n=_("sites"),c=V(),[t,s]=x.useState(null),d=o.state.filters.site_id??"",p=x.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:j(n.data)},{key:"tag_type",label:"Tag",allLabel:"QR + NFC",options:[{value:"qr",label:"QR code"},{value:"nfc",label:"NFC tag"}]},{key:"is_active",label:"Status",allLabel:"Any status",options:[{value:"1",label:"Active"},{value:"0",label:"Inactive"}]}],[n.data]),r=[w.accessor("name",{header:"Checkpoint",meta:{sortKey:"name"},cell:i=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-900",children:i.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:i.row.original.site_name})]})}),w.accessor("tag_type",{header:"Tag",cell:i=>e.jsxs("span",{className:"inline-flex items-center gap-1 text-xs",children:[i.getValue()==="qr"?e.jsx(Ve,{size:14}):e.jsx(Ce,{size:14}),e.jsx("span",{className:"font-mono",children:i.row.original.tag_code})]})}),w.accessor("lat",{header:"Location",cell:i=>e.jsx("span",{className:"text-xs text-slate-500",children:i.getValue()?`${Number(i.getValue()).toFixed(5)}, ${Number(i.row.original.lng).toFixed(5)}`:"—"})}),w.accessor("sort_order",{header:"Order",meta:{sortKey:"sort_order",className:"text-center w-16"}}),w.accessor("is_active",{header:"Status",cell:i=>e.jsx(O,{active:i.getValue()})}),w.display({id:"actions",header:"",meta:{className:"w-20 text-right"},cell:i=>e.jsxs(se,{children:[l("patrol","update")&&e.jsx("button",{className:"btn-ghost btn-sm p-1.5",title:"Edit",onClick:()=>s(i.row.original),children:e.jsx(ae,{size:15})}),l("patrol","delete")&&e.jsx("button",{className:"btn-danger-ghost btn-sm p-1.5",title:"Delete",onClick:async()=>{if(await U({title:`Delete checkpoint “${i.row.original.name}”?`,message:"It is removed from its routes too.",danger:!0,confirmLabel:"Delete"}))try{await B(`/checkpoints/${i.row.original.id}`),P.success("Checkpoint deleted"),c("checkpoints","patrol-routes")}catch{}},children:e.jsx(le,{size:15})})]})})];return e.jsxs(e.Fragment,{children:[e.jsx($,{list:o,columns:r,filters:p,rowKey:i=>i.id,dateRange:!1,searchPlaceholder:"Search name, tag, site…",toolbarExtra:e.jsxs(e.Fragment,{children:[d?e.jsx(I,{url:"/checkpoints/qr-sheet",params:{site_id:d},label:"Print QR sheet",fallback:"checkpoints.pdf",icon:e.jsx(we,{size:14})}):e.jsx("span",{className:"text-xs text-slate-400",children:"Pick a site to print its QR sheet"}),l("patrol","create")&&e.jsxs("button",{className:"btn-primary btn-sm",onClick:()=>s("new"),children:[e.jsx(T,{size:14})," Checkpoint"]})]})}),e.jsx(Fe,{row:t,defaultSite:d,onClose:()=>s(null)})]})}function Fe({row:l,defaultSite:o,onClose:n}){const c=_("sites",l!==null),[t,s]=x.useState({site_id:"",name:"",tag_type:"qr",tag_code:"",lat:"",lng:"",sort_order:"0",is_active:!0}),{errors:d,general:p,capture:r,clear:i}=H(),b=V(),h=l!==null&&l!=="new"?l:null;x.useEffect(()=>{l!==null&&(i(),s(h?{site_id:String(h.site_id),name:h.name,tag_type:h.tag_type,tag_code:h.tag_code,lat:h.lat??"",lng:h.lng??"",sort_order:String(h.sort_order),is_active:!!h.is_active}:{site_id:o,name:"",tag_type:"qr",tag_code:"",lat:"",lng:"",sort_order:"0",is_active:!0}))},[l,h,o,i]);const m=W({mutationFn:()=>{const u={site_id:Number(t.site_id)||null,name:t.name,tag_type:t.tag_type,...t.tag_code||h?{tag_code:t.tag_code||null}:{},lat:t.lat||null,lng:t.lng||null,sort_order:Number(t.sort_order)||0,is_active:t.is_active?1:0};return h?X(`/checkpoints/${h.id}`,u):J("/checkpoints",u)},onSuccess:()=>{P.success(h?"Checkpoint updated":"Checkpoint added"),b("checkpoints","patrol-routes"),n()},onError:r});return e.jsxs(Y,{open:l!==null,onClose:n,title:h?`Edit ${h.name}`:"New checkpoint",footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-secondary",onClick:n,children:"Cancel"}),e.jsxs("button",{className:"btn-primary",disabled:m.isPending,onClick:()=>m.mutate(),children:[m.isPending&&e.jsx(A,{size:14})," Save"]})]}),children:[e.jsx(Z,{errors:p}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsx(L,{id:"cp-site",label:"Site",required:!0,placeholder:"Choose…",options:j(c.data),value:t.site_id,onChange:u=>s({...t,site_id:u.target.value}),error:d.site_id,disabled:!!h}),e.jsx(g,{id:"cp-name",label:"Name",required:!0,placeholder:"Main gate, B2 parking…",value:t.name,onChange:u=>s({...t,name:u.target.value}),error:d.name}),e.jsx(L,{id:"cp-type",label:"Tag type",options:[{value:"qr",label:"QR sticker"},{value:"nfc",label:"NFC tag"}],value:t.tag_type,onChange:u=>s({...t,tag_type:u.target.value}),error:d.tag_type}),e.jsx(g,{id:"cp-code",label:t.tag_type==="nfc"?"NFC tag UID":"QR code",required:t.tag_type==="nfc",placeholder:t.tag_type==="qr"?"Auto-generated":"04:A2:3B:1C:…",hint:t.tag_type==="qr"&&!h?"Leave empty: a random 16-character code is generated.":void 0,value:t.tag_code,onChange:u=>s({...t,tag_code:u.target.value.toUpperCase()}),error:d.tag_code}),e.jsx(g,{id:"cp-lat",label:"Latitude",placeholder:"Optional",value:t.lat,onChange:u=>s({...t,lat:u.target.value}),error:d.lat}),e.jsx(g,{id:"cp-lng",label:"Longitude",placeholder:"Optional",value:t.lng,onChange:u=>s({...t,lng:u.target.value})}),e.jsx(g,{id:"cp-order",type:"number",label:"Order",value:t.sort_order,onChange:u=>s({...t,sort_order:u.target.value})}),e.jsx("div",{className:"flex items-end pb-2",children:e.jsx(ee,{checked:t.is_active,onChange:u=>s({...t,is_active:u}),label:"Active"})})]})]})}const M=F();function De(){const{can:l}=q(),o=R("patrol-routes",{sort:"name",dir:"asc",exportName:"Patrol routes"}),n=_("sites"),c=V(),[t,s]=x.useState(null),d=x.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:j(n.data)}],[n.data]),p=[M.accessor("name",{header:"Route",meta:{sortKey:"name"},cell:r=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-900",children:r.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:r.row.original.site_name})]})}),M.accessor("point_names",{header:"Checkpoints in order",cell:r=>e.jsx("span",{className:"text-xs text-slate-600",children:r.getValue()})}),M.accessor("schedules_count",{header:"Schedules",meta:{className:"text-center"}}),M.accessor("is_active",{header:"Status",cell:r=>e.jsx(O,{active:r.getValue()})}),M.display({id:"actions",header:"",meta:{className:"w-20 text-right"},cell:r=>e.jsxs(se,{children:[l("patrol","update")&&e.jsx("button",{className:"btn-ghost btn-sm p-1.5",title:"Edit",onClick:()=>s(r.row.original),children:e.jsx(ae,{size:15})}),l("patrol","delete")&&e.jsx("button",{className:"btn-danger-ghost btn-sm p-1.5",title:"Delete",onClick:async()=>{if(await U({title:`Delete route “${r.row.original.name}”?`,message:"Its schedules stop generating rounds.",danger:!0,confirmLabel:"Delete"}))try{await B(`/patrol-routes/${r.row.original.id}`),P.success("Route deleted"),c("patrol-routes","patrol-schedules")}catch{}},children:e.jsx(le,{size:15})})]})})];return e.jsxs(e.Fragment,{children:[e.jsx($,{list:o,columns:p,filters:d,rowKey:r=>r.id,dateRange:!1,searchPlaceholder:"Search route or site…",toolbarExtra:l("patrol","create")&&e.jsxs("button",{className:"btn-primary btn-sm",onClick:()=>s("new"),children:[e.jsx(T,{size:14})," Route"]})}),e.jsx(ze,{row:t,onClose:()=>s(null)})]})}function ze({row:l,onClose:o}){const n=_("sites",l!==null),c=l!==null&&l!=="new"?l:null,[t,s]=x.useState({site_id:"",name:"",is_active:!0,points:[]}),{errors:d,general:p,capture:r,clear:i}=H(),b=V();x.useEffect(()=>{l!==null&&(i(),s(c?{site_id:String(c.site_id),name:c.name,is_active:!!c.is_active,points:c.points.map(a=>a.checkpoint_id)}:{site_id:"",name:"",is_active:!0,points:[]}))},[l,c,i]);const h=G({queryKey:["checkpoints","for-route",t.site_id],queryFn:()=>te(`/checkpoints?filter[site_id]=${t.site_id}&filter[is_active]=1&per_page=200&sort=sort_order&dir=asc`),enabled:l!==null&&!!t.site_id}),m=new Map((h.data??[]).map(a=>[a.id,a])),u=(a,D)=>{const v=[...t.points],f=a+D;f<0||f>=v.length||([v[a],v[f]]=[v[f],v[a]],s({...t,points:v}))},S=W({mutationFn:()=>{const a={site_id:Number(t.site_id)||null,name:t.name,is_active:t.is_active?1:0,points:t.points};return c?X(`/patrol-routes/${c.id}`,a):J("/patrol-routes",a)},onSuccess:()=>{P.success(c?"Route updated":"Route created"),b("patrol-routes"),o()},onError:r});return e.jsxs(Y,{open:l!==null,onClose:o,size:"lg",title:c?`Edit route ${c.name}`:"New patrol route",footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-secondary",onClick:o,children:"Cancel"}),e.jsxs("button",{className:"btn-primary",disabled:S.isPending,onClick:()=>S.mutate(),children:[S.isPending&&e.jsx(A,{size:14})," Save"]})]}),children:[e.jsx(Z,{errors:p}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsx(L,{id:"rt-site",label:"Site",required:!0,placeholder:"Choose…",options:j(n.data),value:t.site_id,disabled:!!c,onChange:a=>s({...t,site_id:a.target.value,points:[]}),error:d.site_id}),e.jsx(g,{id:"rt-name",label:"Route name",required:!0,value:t.name,onChange:a=>s({...t,name:a.target.value}),error:d.name})]}),e.jsxs("div",{className:"mt-4 grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Available checkpoints"}),e.jsx("div",{className:"max-h-64 overflow-y-auto rounded-lg border border-slate-200",children:t.site_id?(h.data??[]).filter(a=>!t.points.includes(a.id)).map(a=>e.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 border-b border-slate-100 px-3 py-2 text-left text-sm hover:bg-slate-50",onClick:()=>s({...t,points:[...t.points,a.id]}),children:[e.jsx(T,{size:14,className:"text-slate-400"})," ",a.name," ",e.jsx("span",{className:"ml-auto text-xs uppercase text-slate-400",children:a.tag_type})]},a.id)):e.jsx("p",{className:"p-3 text-xs text-slate-400",children:"Choose a site first."})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Patrol order"}),e.jsxs("ol",{className:"max-h-64 overflow-y-auto rounded-lg border border-slate-200",children:[t.points.length===0&&e.jsx("li",{className:"p-3 text-xs text-slate-400",children:"Add checkpoints in the order the guard walks them."}),t.points.map((a,D)=>{var v,f;return e.jsxs("li",{className:"flex items-center gap-2 border-b border-slate-100 px-3 py-1.5 text-sm",children:[e.jsx("span",{className:"w-5 text-xs font-semibold text-slate-400",children:D+1}),e.jsx("span",{className:"flex-1",children:((v=m.get(a))==null?void 0:v.name)??((f=c==null?void 0:c.points.find(K=>K.checkpoint_id===a))==null?void 0:f.name)??`#${a}`}),e.jsx("button",{type:"button",className:"p-1 text-slate-400 hover:text-slate-700",onClick:()=>u(D,-1),"aria-label":"Up",children:e.jsx(je,{size:13})}),e.jsx("button",{type:"button",className:"p-1 text-slate-400 hover:text-slate-700",onClick:()=>u(D,1),"aria-label":"Down",children:e.jsx(ye,{size:13})}),e.jsx("button",{type:"button",className:"p-1 text-rose-500 hover:text-rose-700",onClick:()=>s({...t,points:t.points.filter(K=>K!==a)}),"aria-label":"Remove",children:e.jsx(be,{size:13})})]},a)})]}),d.points&&e.jsx("p",{className:"field-error",children:d.points})]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(ee,{checked:t.is_active,onChange:a=>s({...t,is_active:a}),label:"Active"})})]})}const k=F();function Me(){const{can:l}=q(),o=R("patrol-schedules",{sort:"start_time",dir:"asc",exportName:"Patrol schedules"}),n=_("sites"),c=V(),[t,s]=x.useState(null),d=x.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:j(n.data)}],[n.data]),p=[k.accessor("route_name",{header:"Route",meta:{sortKey:"route"},cell:r=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-900",children:r.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:r.row.original.site_name})]})}),k.accessor("interval_min",{header:"Every",cell:r=>`${r.getValue()>=60&&r.getValue()%60===0?`${r.getValue()/60} h`:`${r.getValue()} min`}`}),k.accessor("start_time",{header:"Window (IST)",meta:{sortKey:"start_time"},cell:r=>`${r.getValue()} – ${r.row.original.end_time}`}),k.accessor("grace_min",{header:"Grace",cell:r=>`${r.getValue()} min`}),k.accessor("shift_name",{header:"Shift",cell:r=>r.getValue()??e.jsx("span",{className:"text-slate-400",children:"Any"})}),k.accessor("is_active",{header:"Status",cell:r=>e.jsx(O,{active:r.getValue()})}),k.display({id:"actions",header:"",meta:{className:"w-20 text-right"},cell:r=>e.jsxs(se,{children:[l("patrol","update")&&e.jsx("button",{className:"btn-ghost btn-sm p-1.5",title:"Edit",onClick:()=>s(r.row.original),children:e.jsx(ae,{size:15})}),l("patrol","delete")&&e.jsx("button",{className:"btn-danger-ghost btn-sm p-1.5",title:"Delete",onClick:async()=>{if(await U({title:"Delete this schedule?",danger:!0,confirmLabel:"Delete"}))try{await B(`/patrol-schedules/${r.row.original.id}`),P.success("Schedule deleted"),c("patrol-schedules")}catch{}},children:e.jsx(le,{size:15})})]})})];return e.jsxs(e.Fragment,{children:[e.jsx($,{list:o,columns:p,filters:d,rowKey:r=>r.id,dateRange:!1,searchPlaceholder:"Search route or site…",toolbarExtra:l("patrol","create")&&e.jsxs("button",{className:"btn-primary btn-sm",onClick:()=>s("new"),children:[e.jsx(T,{size:14})," Schedule"]})}),e.jsx(Ee,{row:t,onClose:()=>s(null)})]})}function Ee({row:l,onClose:o}){var S;const n=l!==null&&l!=="new"?l:null,c=_("shifts",l!==null),t=G({queryKey:["patrol-routes","options"],queryFn:()=>te("/patrol-routes?per_page=200&sort=name&dir=asc"),enabled:l!==null}),[s,d]=x.useState({route_id:"",shift_id:"",interval_min:"120",start_time:"22:00",end_time:"06:00",grace_min:"15",is_active:!0}),{errors:p,general:r,capture:i,clear:b}=H(),h=V();x.useEffect(()=>{l!==null&&(b(),d(n?{route_id:String(n.route_id),shift_id:n.shift_id?String(n.shift_id):"",interval_min:String(n.interval_min),start_time:n.start_time,end_time:n.end_time,grace_min:String(n.grace_min),is_active:!!n.is_active}:{route_id:"",shift_id:"",interval_min:"120",start_time:"22:00",end_time:"06:00",grace_min:"15",is_active:!0}))},[l,n,b]);const m=(S=t.data)==null?void 0:S.find(a=>String(a.id)===s.route_id),u=W({mutationFn:()=>{const a={route_id:Number(s.route_id)||null,shift_id:Number(s.shift_id)||null,interval_min:Number(s.interval_min),start_time:s.start_time,end_time:s.end_time,grace_min:Number(s.grace_min),is_active:s.is_active?1:0};return n?X(`/patrol-schedules/${n.id}`,a):J("/patrol-schedules",a)},onSuccess:()=>{P.success(n?"Schedule updated":"Schedule created","Rounds are generated up to 1 hour ahead"),h("patrol-schedules","patrol-routes"),o()},onError:i});return e.jsxs(Y,{open:l!==null,onClose:o,title:n?"Edit schedule":"New patrol schedule",subtitle:"E.g. every 2 hours between 22:00 and 06:00. Windows that end before they start run past midnight.",footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-secondary",onClick:o,children:"Cancel"}),e.jsxs("button",{className:"btn-primary",disabled:u.isPending,onClick:()=>u.mutate(),children:[u.isPending&&e.jsx(A,{size:14})," Save"]})]}),children:[e.jsx(Z,{errors:r}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsx(L,{id:"sc-route",label:"Route",required:!0,placeholder:"Choose…",options:(t.data??[]).map(a=>({value:String(a.id),label:`${a.name} — ${a.site_name}`})),value:s.route_id,onChange:a=>d({...s,route_id:a.target.value}),error:p.route_id}),e.jsx(L,{id:"sc-shift",label:"Shift (guard assignment)",placeholder:"Whoever is on duty",options:oe(c.data,m?String(m.site_id):""),value:s.shift_id,onChange:a=>d({...s,shift_id:a.target.value}),error:p.shift_id}),e.jsx(g,{id:"sc-start",type:"time",label:"From (IST)",required:!0,value:s.start_time,onChange:a=>d({...s,start_time:a.target.value}),error:p.start_time}),e.jsx(g,{id:"sc-end",type:"time",label:"To (IST)",required:!0,value:s.end_time,onChange:a=>d({...s,end_time:a.target.value}),error:p.end_time}),e.jsx(g,{id:"sc-iv",type:"number",min:15,step:15,label:"Every (minutes)",required:!0,value:s.interval_min,onChange:a=>d({...s,interval_min:a.target.value}),error:p.interval_min}),e.jsx(g,{id:"sc-grace",type:"number",min:0,label:"Grace (minutes)",hint:"Missed alert after due time + grace",value:s.grace_min,onChange:a=>d({...s,grace_min:a.target.value}),error:p.grace_min}),e.jsx(ee,{checked:s.is_active,onChange:a=>d({...s,is_active:a}),label:"Active"})]})]})}const N=F();function Le(){const l=R("patrol/scans",{sort:"scanned_at",dir:"desc",exportName:"Patrol scans"}),o=_("sites"),n=x.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:j(o.data)},{key:"captured_offline",label:"Offline",allLabel:"Online + offline",options:[{value:"1",label:"Synced offline"}]}],[o.data]),c=[N.accessor("scanned_at",{header:"Scanned",meta:{sortKey:"scanned_at"},cell:t=>e.jsx("span",{className:"whitespace-nowrap",children:E(t.getValue())})}),N.accessor("checkpoint_name",{header:"Checkpoint",cell:t=>e.jsxs("div",{children:[e.jsx("div",{children:t.getValue()}),e.jsx("div",{className:"text-xs text-slate-500",children:t.row.original.site_name})]})}),N.accessor("guard_name",{header:"Guard"}),N.accessor("distance_m",{header:"Distance",cell:t=>t.getValue()===null?"—":`${t.getValue()} m`}),N.accessor("round_id",{header:"Round",cell:t=>t.getValue()?`#${t.getValue()}`:e.jsx("span",{className:"text-xs text-slate-400",children:"ad-hoc"})}),N.accessor("captured_offline",{header:"",cell:t=>t.getValue()?e.jsx("span",{className:"badge-gray",children:"offline"}):null}),N.accessor("photo_url",{header:"Photo",cell:t=>t.getValue()?e.jsx("a",{href:t.getValue(),target:"_blank",rel:"noreferrer",className:"text-xs text-navy-700 underline",children:"View"}):null})];return e.jsx($,{list:l,columns:c,filters:n,rowKey:t=>t.id,dateRangeLabel:"Scanned",searchPlaceholder:"Search site, checkpoint, guard, tag…"})}const y=F();function qe(){const l=R("site-visits",{sort:"visited_at",dir:"desc",exportName:"Site visits"}),o=_("sites"),n=x.useMemo(()=>[{key:"site_id",label:"Site",allLabel:"All sites",options:j(o.data)},{key:"rating",label:"Rating",allLabel:"Any rating",options:[1,2,3,4,5].map(t=>({value:String(t),label:`${t} ★`}))}],[o.data]),c=[y.accessor("visited_at",{header:"Visited",meta:{sortKey:"visited_at"},cell:t=>e.jsx("span",{className:"whitespace-nowrap",children:E(t.getValue())})}),y.accessor("site_name",{header:"Site",meta:{sortKey:"site"}}),y.accessor("user_name",{header:"Supervisor"}),y.accessor("distance_m",{header:"GPS",cell:t=>t.getValue()===null?"—":e.jsxs("span",{className:t.row.original.inside_fence?"text-emerald-700":"font-semibold text-rose-600",children:[t.getValue()," m"]})}),y.accessor("guards_present",{header:"Guards",meta:{className:"text-center"}}),y.accessor("rating",{header:"Rating",meta:{sortKey:"rating"},cell:t=>t.getValue()?e.jsx("span",{className:"inline-flex items-center gap-0.5 text-gold-600",children:Array.from({length:t.getValue()}).map((s,d)=>e.jsx(Se,{size:12,fill:"currentColor"},d))}):"—"}),y.accessor("remarks",{header:"Remarks",cell:t=>e.jsx("span",{className:"text-xs text-slate-600",children:t.getValue()})}),y.accessor("photo_url",{header:"Photo",cell:t=>t.getValue()?e.jsx("a",{href:t.getValue(),target:"_blank",rel:"noreferrer",children:e.jsx("img",{src:t.getValue(),alt:"",className:"h-9 w-12 rounded object-cover"})}):null})];return e.jsx($,{list:l,columns:c,filters:n,rowKey:t=>t.id,dateRangeLabel:"Visited",searchPlaceholder:"Search site, supervisor, remarks…",emptyMessage:"Supervisors check in at sites from the app with a photo and GPS."})}export{Xe as default};
