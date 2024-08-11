import{r as oe,j as se}from"./react-DUmIWLMH.js";import{c as le}from"./chroma-js-CSFU0e9T.js";import{d as de}from"./date-fns-CS3utnwM.js";var b={};Object.defineProperty(b,"__esModule",{value:!0});var m=oe,ie=le,i=de,o=se;function ce(e){return e&&e.__esModule?e:{default:e}}var $=ce(ie);const C="react-activity-calendar",T=8,P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ue={months:P,weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}};function fe(){const[e,t]=m.useState("light"),n=r=>{t(r.matches?"dark":"light")};return m.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)");return t(r.matches?"dark":"light"),r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),e}const he="(prefers-reduced-motion: reduce)";function me(){const[e,t]=m.useState(!0);return m.useEffect(()=>{const n=window.matchMedia(he);t(n.matches);const r=a=>{t(a.matches)};return n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),e}function ge(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var ye=`.styles-module_container__GBNxC {
  width: max-content; /* Calendar should not grow */
  max-width: 100%; /* Do not remove - flexbox parents */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.styles-module_container__GBNxC rect {
  stroke: rgba(0, 0, 0, 0.08);
  stroke-width: 1px;
  shape-rendering: geometricPrecision;
}

@media (prefers-color-scheme: dark) {
  .styles-module_container__GBNxC rect {
    stroke: rgba(255, 255, 255, 0.04);
  }
}

.styles-module_scrollContainer__-bJC8 {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.styles-module_calendar__sT1ND {
  display: block; /* SVGs are inline-block by default */
  overflow: visible; /* Weekday labels are rendered left of the container */
}

.styles-module_calendar__sT1ND text {
  fill: currentColor;
}

.styles-module_footer__ZQ-Bl {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  white-space: nowrap;
}

.styles-module_legendColors__kFY2e {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 3px;
}

@keyframes styles-module_loadingAnimation__V0w3h {
  0% {
    fill: var(--react-activity-calendar-loading);
  }
  50% {
    fill: var(--react-activity-calendar-loading-active);
  }
  100% {
    fill: var(--react-activity-calendar-loading);
  }
}
`,v={container:"styles-module_container__GBNxC",scrollContainer:"styles-module_scrollContainer__-bJC8",calendar:"styles-module_calendar__sT1ND",footer:"styles-module_footer__ZQ-Bl",legendColors:"styles-module_legendColors__kFY2e",loadingAnimation:"styles-module_loadingAnimation__V0w3h"};ge(ye);function pe(e,t=0){if(e.length===0)return[];const n=xe(e),r=n[0],a=i.parseISO(r.date),l=i.getDay(a)===t?a:i.subWeeks(i.nextDay(a,t),1),c=[...Array(i.differenceInCalendarDays(a,l)).fill(void 0),...n],h=Math.ceil(c.length/7);return Array(h).fill(void 0).map((f,g)=>c.slice(g*7,g*7+7))}function xe(e){if(e.length===0)return[];const t=new Map(e.map(a=>[a.date,a])),n=e[0],r=e[e.length-1];return i.eachDayOfInterval({start:i.parseISO(n.date),end:i.parseISO(r.date)}).map(a=>{const l=i.formatISO(a,{representation:"date"});return t.has(l)?t.get(l):{date:l,count:0,level:0}})}function _e(e,t=P){return e.reduce((n,r,a)=>{const l=r.find(f=>f!==void 0);if(!l)throw new Error(`Unexpected error: Week ${a+1} is empty: [${r}].`);const c=t[i.getMonth(i.parseISO(l.date))];if(!c){const f=new Date(l.date).toLocaleString("en-US",{month:"short"});throw new Error(`Unexpected error: undefined month label for ${f}.`)}const h=n[n.length-1];return a===0||!h||h.label!==c?[...n,{weekIndex:a,label:c}]:n},[]).filter(({weekIndex:n},r,a)=>r===0?a[1]&&a[1].weekIndex-n>=3:r===a.length-1?e.slice(n).length>=3:!0)}function p(e,t){return t?`${C}__${e} ${t}`:`${C}__${e}`}function we(){const e=new Date().getFullYear();return i.eachDayOfInterval({start:new Date(e,0,1),end:new Date(e,11,31)}).map(n=>({date:i.formatISO(n,{representation:"date"}),count:0,level:0}))}function ve(e,t,n,r){if(n.length!==7)throw new Error("Exactly 7 labels, one for each weekday must be passed.");return e.reduce((a,l,c)=>{if(c%2!==0){const h=(c+t)%7,f=n[h],g=Math.ceil(Ce(f,r).width);return Math.max(a,g)}return a},0)}function Ce(e,t){if(typeof document>"u"||typeof window>"u")throw new Error("Unexpected error: text dimensions can only be calculated on the client, not the server.");if(t<1)throw new RangeError("fontSize must be positive");if(e.length===0)return{width:0,height:0};const n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");r.style.position="absolute",r.style.visibility="hidden",r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${t}px`;const a=document.createElementNS(n,"text");a.textContent=e,r.appendChild(a),document.body.appendChild(r);const l=a.getBBox();return document.body.removeChild(r),{width:l.width,height:l.height}}function Ee(e,t=5){const n=Ae(t);return e?($e(e,t),e.light=e.light??n.light,e.dark=e.dark??n.dark,{light:J(e.light,t)?e.light:j(e.light,t),dark:J(e.dark,t)?e.dark:j(e.dark,t)}):n}function Ae(e){return{light:j(["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],e),dark:j(["hsl(0, 0%, 20%)","hsl(0, 0%, 92%)"],e)}}function $e(e,t){if(typeof e!="object"||e.light===void 0&&e.dark===void 0)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${t} colors respectively.`);if(e.light){const{length:n}=e.light;if(n!==2&&n!==t)throw new Error(`theme.light must contain exactly 2 or ${t} colors, ${n} passed.`)}if(e.dark){const{length:n}=e.dark;if(n!==2&&n!==t)throw new Error(`theme.dark must contain exactly 2 or ${t} colors, ${n} passed.`)}}function J(e,t){const n=e.find(r=>!$.default.valid(r));if(n)throw new Error(`Invalid color "${String(n)}" passed. All CSS color formats are accepted.`);return e.length===t}function j(e,t){return $.default.scale(e).mode("lch").colors(t)}const F=m.forwardRef(({data:e,blockMargin:t=4,blockRadius:n=2,blockSize:r=12,colorScheme:a=void 0,eventHandlers:l={},fontSize:c=14,hideColorLegend:h=!1,hideMonthLabels:f=!1,hideTotalCount:g=!1,labels:Q=void 0,maxLevel:x=4,loading:_=!1,renderBlock:L=void 0,showWeekdayLabels:N=!1,style:Y={},theme:V=void 0,totalCount:k=void 0,weekStart:D=0},Z)=>{x=Math.max(1,x);const q=Ee(V,x+1),K=fe(),S=q[a??K],M=!me();if(_&&(e=we()),e.length===0)return null;const X=e[0],I=i.getYear(i.parseISO(X.date)),w=pe(e,D),H=w[0],y=Object.assign({},ue,Q),B=f?0:c+T,W=N?ve(H,D,y.weekdays,c)+T:void 0;function z(){return{width:w.length*(r+t)-t,height:B+(r+t)*7-t}}function ee(u){return Object.keys(l).reduce((d,s)=>({...d,[s]:E=>{var A;return(A=l[s])==null?void 0:A.call(l,E)(u)}}),{})}function te(){return w.map((u,d)=>u.map((s,E)=>{if(!s)return null;if(s.level<0||s.level>x)throw new RangeError(`Provided activity level ${s.level} for ${s.date} is out of range. It must be between 0 and ${x}.`);const A=_&&M?{animation:`${v.loadingAnimation} 1.75s ease-in-out infinite`,animationDelay:`${d*20+E*20}ms`}:void 0,U=o.jsx("rect",{...ee(s),x:0,y:B+(r+t)*E,width:r,height:r,rx:n,ry:n,fill:S[s.level],"data-date":s.date,"data-level":s.level,style:A});return o.jsx(m.Fragment,{children:L?L(U,s):U},s.date)})).map((u,d)=>o.jsx("g",{transform:`translate(${(r+t)*d}, 0)`,children:u},d))}function ne(){if(g&&h)return null;const u=typeof k=="number"?k:e.reduce((d,s)=>d+s.count,0);return o.jsxs("footer",{className:p("footer",v.footer),style:{marginLeft:W},children:[_&&o.jsx("div",{children:" "}),!_&&!g&&o.jsx("div",{className:p("count"),children:y.totalCount?y.totalCount.replace("{{count}}",String(u)).replace("{{year}}",String(I)):`${u} activities in ${I}`}),!_&&!h&&o.jsxs("div",{className:p("legend-colors",v.legendColors),children:[o.jsx("span",{style:{marginRight:"0.4em"},children:y.legend.less}),Array(x+1).fill(void 0).map((d,s)=>o.jsx("svg",{width:r,height:r,children:o.jsx("rect",{width:r,height:r,fill:S[s],rx:n,ry:n})},s)),o.jsx("span",{style:{marginLeft:"0.4em"},children:y.legend.more})]})]})}function re(){return!N&&f?null:o.jsxs(o.Fragment,{children:[N&&w[0]&&o.jsx("g",{className:p("legend-weekday"),children:w[0].map((u,d)=>{if(d%2===0)return null;const s=(d+D)%7;return o.jsx("text",{x:-T,y:B+(r+t)*d+r/2,dominantBaseline:"middle",textAnchor:"end",children:y.weekdays[s]},d)})}),!f&&o.jsx("g",{className:p("legend-month"),children:_e(w,y.months).map(({label:u,weekIndex:d})=>o.jsx("text",{x:(r+t)*d,dominantBaseline:"hanging",children:u},d))})]})}const{width:R,height:G}=z(),O=S[0],ae={fontSize:c,...M&&{[`--${C}-loading`]:O,[`--${C}-loading-active`]:a==="light"?$.default(O).darken(.3).hex():$.default(O).brighten(.25).hex()}};return o.jsxs("article",{ref:Z,className:`${C} ${v.container}`,style:{...Y,...ae},children:[o.jsx("div",{className:p("scroll-container",v.scrollContainer),children:o.jsxs("svg",{width:R,height:G,viewBox:`0 0 ${R} ${G}`,className:p("calendar",v.calendar),style:{marginLeft:W},children:[!_&&re(),te()]})}),ne()]})});F.displayName="ActivityCalendar";const je=e=>o.jsx(F,{data:[],...e});function Ne(e){const[t,n]=m.useState(!1);return m.useEffect(()=>{n(!0)},[]),t?o.jsx(F,{...e}):null}b.Skeleton=je;b.default=Ne;export{b};
