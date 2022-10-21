/*
  snaps
  homepage: <https://github.com/vladmandic/snaps>
  author: <https://github.com/vladmandic>'
*/

"use strict";var ut=Object.create;var Pe=Object.defineProperty;var ft=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames;var ht=Object.getPrototypeOf,pt=Object.prototype.hasOwnProperty;var gt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var mt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of dt(t))!pt.call(e,o)&&o!==r&&Pe(e,o,{get:()=>t[o],enumerable:!(n=ft(t,o))||n.enumerable});return e};var L=(e,t,r)=>(r=e!=null?ut(ht(e)):{},mt(t||!e||!e.__esModule?Pe(r,"default",{value:e,enumerable:!0}):r,e));var Ae=gt((mr,Xe)=>{"use strict";var yt=Object.create,Se=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,We=Object.getOwnPropertyNames,bt=Object.getPrototypeOf,St=Object.prototype.hasOwnProperty,wt=(e,t)=>function(){return t||(0,e[We(e)[0]])((t={exports:{}}).exports,t),t.exports},$t=(e,t)=>{for(var r in t)Se(e,r,{get:t[r],enumerable:!0})},Ue=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of We(t))!St.call(e,o)&&o!==r&&Se(e,o,{get:()=>t[o],enumerable:!(n=vt(t,o))||n.enumerable});return e},Q=(e,t,r)=>(r=e!=null?yt(bt(e)):{},Ue(t||!e||!e.__esModule?Se(r,"default",{value:e,enumerable:!0}):r,e)),Ft=e=>Ue(Se({},"__esModule",{value:!0}),e),Ct=wt({"node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/dayjs.min.js"(e,t){(function(r,n){typeof e=="object"&&typeof t<"u"?t.exports=n():typeof define=="function"&&define.amd?define(n):(r=typeof globalThis<"u"?globalThis:r||self).dayjs=n()})(e,function(){"use strict";var r=1e3,n=6e4,o=36e5,c="millisecond",p="second",C="minute",T="hour",E="day",B="week",R="month",J="quarter",x="year",H="date",ue="Invalid Date",Fe=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Ce=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,fe={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},re=function(h,a,i){var u=String(h);return!u||u.length>=a?h:""+Array(a+1-u.length).join(i)+h},ct={s:re,z:function(h){var a=-h.utcOffset(),i=Math.abs(a),u=Math.floor(i/60),s=i%60;return(a<=0?"+":"-")+re(u,2,"0")+":"+re(s,2,"0")},m:function h(a,i){if(a.date()<i.date())return-h(i,a);var u=12*(i.year()-a.year())+(i.month()-a.month()),s=a.clone().add(u,R),d=i-s<0,f=a.clone().add(u+(d?-1:1),R);return+(-(u+(i-s)/(d?s-f:f-s))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:R,y:x,w:B,d:E,D:H,h:T,m:C,s:p,ms:c,Q:J}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},ne="en",q={};q[ne]=fe;var Oe=function(h){return h instanceof he},de=function h(a,i,u){var s;if(!a)return ne;if(typeof a=="string"){var d=a.toLowerCase();q[d]&&(s=d),i&&(q[d]=i,s=d);var f=a.split("-");if(!s&&f.length>1)return h(f[0])}else{var y=a.name;q[y]=a,s=y}return!u&&s&&(ne=s),s||!u&&ne},O=function(h,a){if(Oe(h))return h.clone();var i=typeof a=="object"?a:{};return i.date=h,i.args=arguments,new he(i)},v=ct;v.l=de,v.i=Oe,v.w=function(h,a){return O(h,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var he=function(){function h(i){this.$L=de(i.locale,null,!0),this.parse(i)}var a=h.prototype;return a.parse=function(i){this.$d=function(u){var s=u.date,d=u.utc;if(s===null)return new Date(NaN);if(v.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var f=s.match(Fe);if(f){var y=f[2]-1||0,w=(f[7]||"0").substring(0,3);return d?new Date(Date.UTC(f[1],y,f[3]||1,f[4]||0,f[5]||0,f[6]||0,w)):new Date(f[1],y,f[3]||1,f[4]||0,f[5]||0,f[6]||0,w)}}return new Date(s)}(i),this.$x=i.x||{},this.init()},a.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},a.$utils=function(){return v},a.isValid=function(){return this.$d.toString()!==ue},a.isSame=function(i,u){var s=O(i);return this.startOf(u)<=s&&s<=this.endOf(u)},a.isAfter=function(i,u){return O(i)<this.startOf(u)},a.isBefore=function(i,u){return this.endOf(u)<O(i)},a.$g=function(i,u,s){return v.u(i)?this[u]:this.set(s,i)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(i,u){var s=this,d=!!v.u(u)||u,f=v.p(i),y=function(X,j){var K=v.w(s.$u?Date.UTC(s.$y,j,X):new Date(s.$y,j,X),s);return d?K:K.endOf(E)},w=function(X,j){return v.w(s.toDate()[X].apply(s.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(j)),s)},b=this.$W,M=this.$M,V=this.$D,W="set"+(this.$u?"UTC":"");switch(f){case x:return d?y(1,0):y(31,11);case R:return d?y(1,M):y(0,M+1);case B:var oe=this.$locale().weekStart||0,ie=(b<oe?b+7:b)-oe;return y(d?V-ie:V+(6-ie),M);case E:case H:return w(W+"Hours",0);case T:return w(W+"Minutes",1);case C:return w(W+"Seconds",2);case p:return w(W+"Milliseconds",3);default:return this.clone()}},a.endOf=function(i){return this.startOf(i,!1)},a.$set=function(i,u){var s,d=v.p(i),f="set"+(this.$u?"UTC":""),y=(s={},s[E]=f+"Date",s[H]=f+"Date",s[R]=f+"Month",s[x]=f+"FullYear",s[T]=f+"Hours",s[C]=f+"Minutes",s[p]=f+"Seconds",s[c]=f+"Milliseconds",s)[d],w=d===E?this.$D+(u-this.$W):u;if(d===R||d===x){var b=this.clone().set(H,1);b.$d[y](w),b.init(),this.$d=b.set(H,Math.min(this.$D,b.daysInMonth())).$d}else y&&this.$d[y](w);return this.init(),this},a.set=function(i,u){return this.clone().$set(i,u)},a.get=function(i){return this[v.p(i)]()},a.add=function(i,u){var s,d=this;i=Number(i);var f=v.p(u),y=function(M){var V=O(d);return v.w(V.date(V.date()+Math.round(M*i)),d)};if(f===R)return this.set(R,this.$M+i);if(f===x)return this.set(x,this.$y+i);if(f===E)return y(1);if(f===B)return y(7);var w=(s={},s[C]=n,s[T]=o,s[p]=r,s)[f]||1,b=this.$d.getTime()+i*w;return v.w(b,this)},a.subtract=function(i,u){return this.add(-1*i,u)},a.format=function(i){var u=this,s=this.$locale();if(!this.isValid())return s.invalidDate||ue;var d=i||"YYYY-MM-DDTHH:mm:ssZ",f=v.z(this),y=this.$H,w=this.$m,b=this.$M,M=s.weekdays,V=s.months,W=function(j,K,Me,pe){return j&&(j[K]||j(u,d))||Me[K].slice(0,pe)},oe=function(j){return v.s(y%12||12,j,"0")},ie=s.meridiem||function(j,K,Me){var pe=j<12?"AM":"PM";return Me?pe.toLowerCase():pe},X={YY:String(this.$y).slice(-2),YYYY:this.$y,M:b+1,MM:v.s(b+1,2,"0"),MMM:W(s.monthsShort,b,V,3),MMMM:W(V,b),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:W(s.weekdaysMin,this.$W,M,2),ddd:W(s.weekdaysShort,this.$W,M,3),dddd:M[this.$W],H:String(y),HH:v.s(y,2,"0"),h:oe(1),hh:oe(2),a:ie(y,w,!0),A:ie(y,w,!1),m:String(w),mm:v.s(w,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:f};return d.replace(Ce,function(j,K){return K||X[j]||f.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(i,u,s){var d,f=v.p(u),y=O(i),w=(y.utcOffset()-this.utcOffset())*n,b=this-y,M=v.m(this,y);return M=(d={},d[x]=M/12,d[R]=M,d[J]=M/3,d[B]=(b-w)/6048e5,d[E]=(b-w)/864e5,d[T]=b/o,d[C]=b/n,d[p]=b/r,d)[f]||b,s?M:v.a(M)},a.daysInMonth=function(){return this.endOf(R).$D},a.$locale=function(){return q[this.$L]},a.locale=function(i,u){if(!i)return this.$L;var s=this.clone(),d=de(i,u,!0);return d&&(s.$L=d),s},a.clone=function(){return v.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},h}(),Ee=he.prototype;return O.prototype=Ee,[["$ms",c],["$s",p],["$m",C],["$H",T],["$W",E],["$M",R],["$y",x],["$D",H]].forEach(function(h){Ee[h[1]]=function(a){return this.$g(a,h[0],h[1])}}),O.extend=function(h,a){return h.$i||(h(a,he,O),h.$i=!0),O},O.locale=de,O.isDayjs=Oe,O.unix=function(h){return O(1e3*h)},O.en=q[ne],O.Ls=q,O.p={},O})}}),Ge={};$t(Ge,{access:()=>Ht,accessFile:()=>Ze,assert:()=>zt,blank:()=>Vt,client:()=>Wt,clientFile:()=>Qe,configure:()=>Ut,console:()=>nr,data:()=>Zt,debug:()=>rr,error:()=>Xt,fatal:()=>er,header:()=>Gt,headerJson:()=>Jt,info:()=>Kt,logFile:()=>qe,options:()=>g,print:()=>z,ring:()=>ge,state:()=>qt,tags:()=>P,timed:()=>Yt,verbose:()=>tr,warn:()=>Qt});Xe.exports=Ft(Ge);var Je=Q(require("os")),Z=Q(require("fs")),U=Q(require("path")),le=Q(Ct()),Te=10,Ie=(e=0)=>t=>`\x1B[${t+e}m`,Be=(e=0)=>t=>`\x1B[${38+e};5;${t}m`,ke=(e=0)=>(t,r,n)=>`\x1B[${38+e};2;${t};${r};${n}m`;function Ot(){let e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright,t.bgColor.bgGray=t.bgColor.bgBlackBright,t.color.grey=t.color.blackBright,t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(let[r,n]of Object.entries(t)){for(let[o,c]of Object.entries(n))t[o]={open:`\x1B[${c[0]}m`,close:`\x1B[${c[1]}m`},n[o]=t[o],e.set(c[0],c[1]);Object.defineProperty(t,r,{value:n,enumerable:!1})}return Object.defineProperty(t,"codes",{value:e,enumerable:!1}),t.color.close="\x1B[39m",t.bgColor.close="\x1B[49m",t.color.ansi=Ie(),t.color.ansi256=Be(),t.color.ansi16m=ke(),t.bgColor.ansi=Ie(Te),t.bgColor.ansi256=Be(Te),t.bgColor.ansi16m=ke(Te),Object.defineProperties(t,{rgbToAnsi256:{value:(r,n,o)=>r===n&&n===o?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(n/255*5)+Math.round(o/255*5),enumerable:!1},hexToRgb:{value:r=>{let n=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(r.toString(16));if(!n)return[0,0,0];let{colorString:o}=n.groups;o.length===3&&(o=[...o].map(p=>p+p).join(""));let c=Number.parseInt(o,16);return[c>>16&255,c>>8&255,c&255]},enumerable:!1},hexToAnsi256:{value:r=>t.rgbToAnsi256(...t.hexToRgb(r)),enumerable:!1},ansi256ToAnsi:{value:r=>{if(r<8)return 30+r;if(r<16)return 90+(r-8);let n,o,c;if(r>=232)n=((r-232)*10+8)/255,o=n,c=n;else{r-=16;let T=r%36;n=Math.floor(r/36)/5,o=Math.floor(T/6)/5,c=T%6/5}let p=Math.max(n,o,c)*2;if(p===0)return 30;let C=30+(Math.round(c)<<2|Math.round(o)<<1|Math.round(n));return p===2&&(C+=60),C},enumerable:!1},rgbToAnsi:{value:(r,n,o)=>t.ansi256ToAnsi(t.rgbToAnsi256(r,n,o)),enumerable:!1},hexToAnsi:{value:r=>t.ansi256ToAnsi(t.hexToAnsi256(r)),enumerable:!1}}),t}var Mt=Ot(),Y=Mt,je=Q(require("process"),1),Tt=Q(require("os"),1),Le=Q(require("tty"),1);function k(e,t=je.default.argv){let r=e.startsWith("-")?"":e.length===1?"-":"--",n=t.indexOf(r+e),o=t.indexOf("--");return n!==-1&&(o===-1||n<o)}var{env:$}=je.default,ye;k("no-color")||k("no-colors")||k("color=false")||k("color=never")?ye=0:(k("color")||k("colors")||k("color=true")||k("color=always"))&&(ye=1);function _t(){if("FORCE_COLOR"in $)return $.FORCE_COLOR==="true"?1:$.FORCE_COLOR==="false"?0:$.FORCE_COLOR.length===0?1:Math.min(Number.parseInt($.FORCE_COLOR,10),3)}function Rt(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function xt(e,{streamIsTTY:t,sniffFlags:r=!0}={}){let n=_t();n!==void 0&&(ye=n);let o=r?ye:n;if(o===0)return 0;if(r){if(k("color=16m")||k("color=full")||k("color=truecolor"))return 3;if(k("color=256"))return 2}if(e&&!t&&o===void 0)return 0;let c=o||0;if($.TERM==="dumb")return c;if(je.default.platform==="win32"){let p=Tt.default.release().split(".");return Number(p[0])>=10&&Number(p[2])>=10586?Number(p[2])>=14931?3:2:1}if("CI"in $)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE","DRONE"].some(p=>p in $)||$.CI_NAME==="codeship"?1:c;if("TEAMCITY_VERSION"in $)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($.TEAMCITY_VERSION)?1:0;if("TF_BUILD"in $&&"AGENT_NAME"in $)return 1;if($.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in $){let p=Number.parseInt(($.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch($.TERM_PROGRAM){case"iTerm.app":return p>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test($.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($.TERM)||"COLORTERM"in $?1:c}function Ne(e,t={}){let r=xt(e,{streamIsTTY:e&&e.isTTY,...t});return Rt(r)}var jt={stdout:Ne({isTTY:Le.default.isatty(1)}),stderr:Ne({isTTY:Le.default.isatty(2)})},At=jt;function Dt(e,t,r){let n=e.indexOf(t);if(n===-1)return e;let o=t.length,c=0,p="";do p+=e.substr(c,n-c)+t+r,c=n+o,n=e.indexOf(t,c);while(n!==-1);return p+=e.slice(c),p}function Et(e,t,r,n){let o=0,c="";do{let p=e[n-1]==="\r";c+=e.substr(o,(p?n-1:n)-o)+t+(p?`\r
`:`
`)+r,o=n+1,n=e.indexOf(`
`,o)}while(n!==-1);return c+=e.slice(o),c}var{stdout:Ye,stderr:ze}=At,_e=Symbol("GENERATOR"),ee=Symbol("STYLER"),se=Symbol("IS_EMPTY"),He=["ansi","ansi","ansi256","ansi16m"],te=Object.create(null),Pt=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let r=Ye?Ye.level:0;e.level=t.level===void 0?r:t.level},It=class{constructor(e){return Ve(e)}},Ve=e=>{let t=(...r)=>r.join(" ");return Pt(t,e),Object.setPrototypeOf(t,ce.prototype),t};function ce(e){return Ve(e)}Object.setPrototypeOf(ce.prototype,Function.prototype);for(let[e,t]of Object.entries(Y))te[e]={get(){let r=ve(this,xe(t.open,t.close,this[ee]),this[se]);return Object.defineProperty(this,e,{value:r}),r}};te.visible={get(){let e=ve(this,this[ee],!0);return Object.defineProperty(this,"visible",{value:e}),e}};var Re=(e,t,r,...n)=>e==="rgb"?t==="ansi16m"?Y[r].ansi16m(...n):t==="ansi256"?Y[r].ansi256(Y.rgbToAnsi256(...n)):Y[r].ansi(Y.rgbToAnsi(...n)):e==="hex"?Re("rgb",t,r,...Y.hexToRgb(...n)):Y[r][e](...n),Bt=["rgb","hex","ansi256"];for(let e of Bt){te[e]={get(){let{level:r}=this;return function(...n){let o=xe(Re(e,He[r],"color",...n),Y.color.close,this[ee]);return ve(this,o,this[se])}}};let t="bg"+e[0].toUpperCase()+e.slice(1);te[t]={get(){let{level:r}=this;return function(...n){let o=xe(Re(e,He[r],"bgColor",...n),Y.bgColor.close,this[ee]);return ve(this,o,this[se])}}}}var kt=Object.defineProperties(()=>{},{...te,level:{enumerable:!0,get(){return this[_e].level},set(e){this[_e].level=e}}}),xe=(e,t,r)=>{let n,o;return r===void 0?(n=e,o=t):(n=r.openAll+e,o=t+r.closeAll),{open:e,close:t,openAll:n,closeAll:o,parent:r}},ve=(e,t,r)=>{let n=(...o)=>Lt(n,o.length===1?""+o[0]:o.join(" "));return Object.setPrototypeOf(n,kt),n[_e]=e,n[ee]=t,n[se]=r,n},Lt=(e,t)=>{if(e.level<=0||!t)return e[se]?"":t;let r=e[ee];if(r===void 0)return t;let{openAll:n,closeAll:o}=r;if(t.includes("\x1B"))for(;r!==void 0;)t=Dt(t,r.close,r.open),r=r.parent;let c=t.indexOf(`
`);return c!==-1&&(t=Et(t,o,n,c)),n+t+o};Object.defineProperties(ce.prototype,te);var pr=ce(),gr=ce({level:ze?ze.level:0}),Ke=require("console"),N=new It({level:2}),ge=[],g={dateFormat:"YYYY-MM-DD HH:mm:ss",ringLength:100,console:!0,timeStamp:!0},m={logFile:!1,accessFile:!1,clientFile:!1,logStream:void 0,accessStream:void 0,clientStream:void 0},P={blank:"",continue:":     ",info:N.cyan("INFO: "),warn:N.yellow("WARN: "),data:N.green("DATA: "),error:N.red("ERROR:"),fatal:N.bold.red("FATAL:"),assert:N.italic.bold.red("ASSERT:"),timed:N.magentaBright("TIMED:"),state:N.magenta("STATE:"),verbose:N.bgGray.yellowBright("VERB: "),debug:N.bgGray.redBright("DEBUG:"),console:N.gray("CONSOLE:")},me={showHidden:!1,depth:5,colors:!0,showProxy:!0,maxArrayLength:1024,maxStringLength:10240,breakLength:200,compact:64,sorted:!1,getters:!1},be=new Ke.Console({stdout:process.stdout,stderr:process.stderr,ignoreErrors:!0,inspectOptions:me});function Nt(e){let t="";try{t=JSON.stringify(e)}catch{}return t}function ae(...e){let t="";for(let r of e)t+=typeof r=="object"?Nt(r):r,t+=" ";return t}function z(...e){let t=(0,le.default)(Date.now()).format(g.dateFormat);g.console&&(g.timeStamp?be.log(t,...e):be.log(...e))}function qe(e){typeof e=="string"&&(g.logFile=e,m.logFile=!0,m.logStream=Z.createWriteStream(U.resolve(g.logFile||""),{flags:"a"}),m.logStream&&m.logStream.on("error",t=>{z(P.error,"Cannot open application log",g.logFile,t),m.logFile=!1}))}function Ze(e){typeof e=="string"&&(g.accessFile=e,m.accessFile=!0,m.accessStream=Z.createWriteStream(U.resolve(g.accessFile),{flags:"a"}),m.accessStream&&m.accessStream.on("error",t=>{z(P.error,"Cannot open application log",g.accessFile,t),m.accessFile=!1}))}function Qe(e){typeof e=="string"&&(g.clientFile=e,m.clientFile=!0,m.clientStream=Z.createWriteStream(U.resolve(g.clientFile),{flags:"a"}),m.clientStream&&m.clientStream.on("error",t=>{z(P.error,"Cannot open application log",g.clientFile,t),m.clientFile=!1}))}async function Yt(e,...t){arguments.length<2&&(t=[e],e=process.hrtime.bigint());let r=process.hrtime.bigint(),n=0;try{n=parseInt((r-e).toString())}catch{}n=Math.round(n/1e6);let o=(0,le.default)(Date.now()).format(g.dateFormat);g.console&&be.log(o,P.timed,`${n.toLocaleString()} ms`,...t),m.logFile&&m.logStream&&m.logStream.write(`${P.timed} ${o} ${n.toLocaleString()} ms ${ae(...t)}
`)}async function _(e,...t){let r=(0,le.default)(Date.now()).format(g.dateFormat);P[e]?z(P[e],...t):z(...t),m.logFile&&m.logStream&&m.logStream.write(`${r} ${P[e]} ${ae(...t)}
`),ge.push({tag:e,time:r,msg:ae(...t)}),ge.length>g.ringLength&&ge.shift()}async function zt(e,t,...r){e!==t&&_("assert",...r,{res:e,exp:t})}async function Ht(...e){let t=(0,le.default)(Date.now()).format(g.dateFormat);m.accessFile&&m.accessStream&&m.accessStream.write(`${t} ${ae(...e)}
`)}async function Wt(...e){let t=(0,le.default)(Date.now()).format(g.dateFormat);m.clientFile&&m.clientStream&&m.clientStream.write(`${t} ${ae(...e)}
`)}function Ut(e){!e||(e.dateFormat&&(g.dateFormat=e.dateFormat),e.ringLength&&(g.ringLength=e.ringLength),e.logFile&&qe(e.logFile),e.accessFile&&Ze(e.accessFile),e.clientFile&&Qe(e.clientFile),e.inspect&&(me={...me,...e.inspect}),be=new Ke.Console({stdout:process.stdout,stderr:process.stderr,ignoreErrors:!0,inspectOptions:me}))}function Gt(){let e="./package.json";if(!Z.existsSync(e))return;let t=JSON.parse(Z.readFileSync(e).toString());process.title=t.name,_("info",t.name,"version",t.version),_("info","User:",Je.userInfo().username,"Platform:",process.platform,"Arch:",process.arch,"Node:",process.version),g.logFile&&m.logFile&&z(P.state,"Application log:",U.resolve(g.logFile)),g.accessFile&&m.accessFile&&z(P.state,"Access log:",U.resolve(g.accessFile)),g.clientFile&&m.clientFile&&z(P.state,"Client log:",U.resolve(g.clientFile))}function Jt(){let e="./package.json";if(!Z.existsSync(e))return;let t=JSON.parse(Z.readFileSync(e).toString());process.title=t.name,_("info",{application:t.name,version:t.version}),_("info",{user:Je.userInfo().username,platform:process.platform,arch:process.arch,node:process.version}),(g.logFile||g.accessFile||g.clientFile)&&z(P.state,{log:U.resolve(g.logFile||""),access:U.resolve(g.accessFile||""),client:U.resolve(g.clientFile||"")})}var Vt=(...e)=>_("blank",...e),Kt=(...e)=>_("info",...e),qt=(...e)=>_("state",...e),Zt=(...e)=>_("data",...e),Qt=(...e)=>_("warn",...e),Xt=(...e)=>_("error",...e),er=(...e)=>_("fatal",...e),tr=(...e)=>_("verbose",...e),rr=(...e)=>_("debug",...e),nr=(...e)=>_("console",...e)});var G=L(require("fs")),at=L(require("path")),De=L(require("sharp")),D=L(Ae());var F=L(require("fs")),we=L(require("zlib")),tt=L(require("http")),rt=L(require("http2")),S=L(require("path")),I=L(Ae()),l,or={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".ico":"image/x-icon",".svg":"image/svg+xml",".wav":"audio/wav",".mp4":"video/mp4",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".wasm":"application/wasm",".webmanifest":"application/manifest+json"};function ir(e){e=e.split(/[?#]/)[0];let t={ok:!1,stat:null,file:"",redirect:null},r=o=>(t.file=o,F.existsSync(o)&&(t.stat=F.statSync(o),t.stat.isFile())?(t.ok=!0,!0):!1),n=o=>(t.file=o,F.existsSync(o)&&(t.stat=F.statSync(o),t.stat.isDirectory())?(t.ok=!0,!0):!1);return new Promise(o=>{n(S.join(process.cwd(),l.documentRoot,e))&&r(S.join(process.cwd(),l.documentRoot,e,l.defaultFile))?(t.redirect=S.join(e,l.defaultFile),o(t)):(r(S.join(process.cwd(),l.documentRoot,e))||r(S.join(process.cwd(),l.documentRoot,e,l.defaultFile))||r(S.join(process.cwd(),l.documentRoot,l.defaultFolder,e))||r(S.join(process.cwd(),l.documentRoot,l.defaultFolder,e,l.defaultFile))||n(S.join(process.cwd(),l.documentRoot,e))||n(S.join(process.cwd(),l.documentRoot,l.defaultFolder,e))||n(S.join(S.dirname(S.join(process.cwd(),l.documentRoot,l.defaultFolder,e,l.defaultFile,e)))),o(t))})}async function et(e,t){let r=decodeURI(e.url);ir(r).then(n=>{let o=(e.headers.forwarded||"").match(/for="\[(.*)\]:/),c=(Array.isArray(o)?o[1]:null)||e.headers["x-forwarded-for"]||e.ip||e.socket.remoteAddress,p=e.headers[":scheme"]?.toUpperCase()||"HTTP";if(!n||!n.ok||!n.stat)t.writeHead(404,{"Content-Type":"text/html; charset=utf-8"}),t.end(`Error 404: Not Found
`,"utf-8"),I.warn(`${p}:`,{method:e.method,ver:e.httpVersion,status:t.statusCode,url:r,remote:c});else if(n.redirect)t.writeHead(301,{Location:n.redirect}),t.end(),I.data(`${p}:`,{method:e.method,ver:e.httpVersion,status:t.statusCode,url:r,redirect:n.redirect,remote:c});else{let C=encodeURIComponent(n.file).replace(/\*/g,"").replace(/\?/g,"").replace(/%2F/g,"/").replace(/%40/g,"@").replace(/%20/g," ").replace(/%3A/g,":").replace(/%5C/g,"\\");if(n?.stat?.isFile()){let T=String(S.extname(C)).toLowerCase(),E=or[T]||"application/octet-stream",B=e.headers.range,R=B?.replace("bytes=","").split("-")||[0,n.stat.size-1],J=parseInt(R[0]||0),x=parseInt(R[1]||n.stat.size-1),H=e.headers["accept-encoding"]?e.headers["accept-encoding"].includes("br"):!1,ue=B?{"Content-Range":"bytes "+J+"-"+x+"/"+n.stat.size,"Accept-Ranges":"bytes","Content-Length":x-J+1}:{},Fe=l.cors?{"Cross-Origin-Embedder-Policy":"require-corp","Cross-Origin-Opener-Policy":"same-origin"}:{};t.writeHead(B?206:200,{"Content-Size":n.stat.size,"Content-Language":"en","Content-Type":E,"Content-Encoding":H&&!B?"br":"","Last-Modified":n.stat.mtime.toUTCString(),"Cache-Control":"no-cache","X-Content-Type-Options":"nosniff","Content-Security-Policy":"media-src 'self' http: https: data:","`Service-Worker-Allowed":"/",...Fe,...ue});let Ce=we.createBrotliCompress({params:{[we.constants.BROTLI_PARAM_QUALITY]:5}}),fe=B?F.createReadStream(C,{start:J,end:x}):F.createReadStream(C);!H||B?fe.pipe(t):fe.pipe(Ce).pipe(t);let re=B?{range:{start:J,end:x,size:x-J+1}}:{};I.data(`${p}:`,{method:e.method,ver:e.httpVersion,status:t.statusCode,mime:E.replace("; charset=utf-8",""),size:n.stat.size,...re,url:r,remote:c})}if(n?.stat?.isDirectory()){t.writeHead(200,{"Content-Language":"en","Content-Type":"application/json; charset=utf-8","Last-Modified":n.stat.mtime,"Cache-Control":"no-cache","X-Content-Type-Options":"nosniff"});let T=F.readdirSync(C);T=T.map(E=>S.join(decodeURI(e.url),E)),t.end(JSON.stringify(T),"utf-8"),I.data(`${p}:`,{method:e.method,ver:e.httpVersion,status:t.statusCode,mime:"directory/json",size:n.stat.size,url:r,remote:c})}}})}async function nt(e){if(l={insecureHTTPParser:!1,...e},F.existsSync(l.sslKey)&&F.existsSync(l.sslCrt))l.key=F.readFileSync(l.sslKey),l.cert=F.readFileSync(l.sslCrt);else try{let t=require.resolve("@vladmandic/build");l.sslKey=S.join(S.dirname(t),"..",l.sslKey),l.sslCrt=S.join(S.dirname(t),"..",l.sslCrt),l.key=F.existsSync(l.sslKey)?F.readFileSync(l.sslKey):null,l.cert=F.existsSync(l.sslCrt)?F.readFileSync(l.sslCrt):null}catch{}(!l.key||!l.cert)&&I.warn("cannot read SSL certificate"),l.httpPort&&l.httpPort>0&&await new Promise(t=>{let r=tt.createServer(l,et);r.on("listening",()=>{I.state("http:",{port:l.httpPort,root:l.documentRoot}),t(!0)}),r.on("error",n=>{I.error("http:",n.message||n),t(!1)}),r.listen(l.httpPort)}),l.httpsPort&&l.httpsPort>0&&l.key&&l.cert&&await new Promise(t=>{let r=rt.createSecureServer(l,et);r.on("listening",()=>{I.state("https:",{port:l.httpsPort,root:l.documentRoot,sslKey:l.sslKey,sslCrt:l.sslCrt}),t(!0)}),r.on("error",n=>{I.error("https:",n.message||n),t(!1)}),r.listen(l.httpsPort)})}var it="@vladmandic/snaps",st="0.1.0";var A={secrets:"secrets.json",log:"snaps.log",folder:"images",interval:2,httpPort:8e3,httpsPort:8001,documentRoot:"public",sslKey:"node_modules/@vladmandic/build/cert/https.key",sslCrt:"node_modules/@vladmandic/build/cert/https.crt",resizeWidth:1280,quality:60},$e={},lr=e=>{let t=G.readdirSync(A.folder),r=0;for(let n of t){if(!n.startsWith(`${e}-`))continue;let o=Number(n.replace(`${e}-`,"").split(".")[0]);o>r&&(r=o)}return r++,D.info("sequence:",{name:e,start:r}),r},lt=()=>{let e=new Date,t=r=>r.toString().padStart(2,"0");return`${e.getFullYear()}:${t(e.getMonth()+1)}:${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`},cr=()=>({IFD0:{Software:`${it} ${st}`},IFD2:{DateTimeOriginal:lt(),OffsetTime:(new Date().getTimezoneOffset()/60).toString()}});async function ur(e,t){let r=await t.blob();if(r.type!=="image/jpeg"&&r.type!=="image/png"){D.warn("unrecognized file type:",{name:e,data:r});return}$e[e]||($e[e]=lr(e));let n=$e[e].toString().padStart(5,"0"),o=at.join(A.folder,`${e}-${n}.jpg`),c=new Uint8Array(await r.arrayBuffer()),p=await(0,De.default)(c).metadata(),C=await(0,De.default)(c).normalize().resize(A.resizeWidth,null).jpeg({quality:A.quality,mozjpeg:!0}).withMetadata({exif:cr()}).toFile(o);$e[e]++,D.data("image:",{seq:n,file:o,input:{name:e,size:r.size,type:r.type,resolution:[p.width,p.height]},output:{size:C.size,resolution:[C.width,C.height]}})}async function fr(e){for(let[t,r]of Object.entries(e))fetch(r).then(n=>ur(t,n)).catch(n=>D.warn(n))}async function dr(){A.log?.length>0&&D.logFile(A.log),D.headerJson(),G.existsSync(A.secrets)||(D.error("cannot read secrets:",A.secrets),process.exit(1)),(!G.existsSync(A.folder)||!G.statSync(A.folder).isDirectory())&&(D.error("desitnation folder does not exist:",A.folder),process.exit(1));let e=G.readFileSync(A.secrets,"utf8"),t=JSON.parse(e);await nt(A),setInterval(()=>fr(t),A.interval*1e3),lt()}dr();
//# sourceMappingURL=snaps.js.map