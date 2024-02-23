import{T as f,b,w as u,t as M,r as y}from"./index-C6f02rMA.js";import{l as h,O as m,e as k,$ as B,x as r,m as $,n as p,L as j,G as c,i as S,j as w,f as C}from"./vendor-rBQtTwS9.js";import{s as D,c as n,p as V,w as L}from"./list-aOPWesmi.js";import{h as A}from"./async-replace-nIeLvibc.js";var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,g=(i,e,s,a)=>{for(var t=a>1?void 0:a?W(e,s):e,o=i.length-1,l;o>=0;o--)(l=i[o])&&(t=(a?l(e,s,t):l(t))||t);return a&&t&&T(e,s,t),t};let d=class extends f(D){constructor(){super(...arguments),this.bindScreen=new h(this,m),this.bindBridge=new h(this,b),this.bindWeekly=new h(this,u),this.bindCharts=new h(this,n),this.paging=!1,this.brief=!0,this.moreSubjects=[],this.morePending=!1,this.err="",this.ts=0,this.pagination=V({pageNum:2}),this.hasMore=!0,this.fetch=async(i=!1)=>{if(!(this.morePending&&!i)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const s={week:await u.getLatest()};if(this.pagination){const{pageSize:t,pageNum:o}=this.pagination;Object.assign(s,{first:t,skip:(o-1)*t})}const{weeklySubjects:a}=await L(s);this.paging?(this.moreSubjects=[...this.moreSubjects,...a],this.hasMore=a.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...a]}catch(e){let s=e.message||e.code||e;this.err=e.message||e.msg||e,console.error(s)}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.go2=(i,e)=>{var s;i.preventDefault(),i.stopPropagation(),this.disabled?k.emit("connect-wallet"):((s=i.target)==null?void 0:s.tagName)=="I"?window.open(e.uri,"_blank"):B(`/track/${e.id}`)}}get disabled(){return!b.bridge.account}get isMobi(){return m.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get loading(){return n.pending&&!n.weeklySubjects.length}get empty(){return n.inited&&!n.weeklySubjects.length}get subjects(){return n.weeklySubjects.concat(this.moreSubjects)}render(){return r`<div role="list" class="ui-list gap-2 ${$(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-8">Rank</div><div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div></div>${p(this.loading,()=>r`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>r`${j(this.subjects,(i,e)=>r`<div class="item flex items-center" @click="${s=>this.go2(s,i)}"><div class="flex-none w-8 text-center text-sm font-light opacity-70">${e+1}</div><div class="flex-shrink flex justify-center"><img-loader .src="${i.cooked.src}" class="subject-img"></img-loader></div><div class="subject-lines flex-auto"><div class="subject-line1"><p class="subject-name ${$({limit:this.brief})}">${i.name}</p><a href="${i.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle"></i></a></div>${p(this.brief,()=>r`<div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${i.cooked.price}</div>`)}</div><div class="subject-lines num flex-initial !w-18 text-sm items-end"><span class="subject-line1">${i.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${i.cooked.chg}"></chg-stat></span></div></div>`)}`)}</div>${p(this.empty,()=>r`<p class="p-2 opacity-60">No votes yet.</p>`)} ${p(this.paging,()=>r`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`}};g([S({type:Boolean})],d.prototype,"paging",2);g([S({type:Boolean})],d.prototype,"brief",2);g([c()],d.prototype,"moreSubjects",2);g([c()],d.prototype,"morePending",2);g([c()],d.prototype,"err",2);g([c()],d.prototype,"ts",2);g([c()],d.prototype,"pagination",2);g([c()],d.prototype,"hasMore",2);d=g([w("weekly-top")],d);var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,O=(i,e,s,a)=>{for(var t=a>1?void 0:a?N(e,s):e,o=i.length-1,l;o>=0;o--)(l=i[o])&&(t=(a?l(e,s,t):l(t))||t);return a&&t&&H(e,s,t),t};let P=class extends f(""){constructor(){super(...arguments),this.bindBridge=new h(this,b),this.dialog=!1,this.open=()=>{this.disabled?k.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!b.bridge.account}render(){return r`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${p(this.dialog,()=>r`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};O([c()],P.prototype,"dialog",2);P=O([w("bind-social-btn")],P);const z="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{display:grid;min-height:20rem;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 1024px){.ui-list.bidders{row-gap:0px}}.ui-list.bidders>*:not(.header){padding-top:.75rem;padding-bottom:.75rem}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,x=(i,e,s,a)=>{for(var t=a>1?void 0:a?q(e,s):e,o=i.length-1,l;o>=0;o--)(l=i[o])&&(t=(a?l(e,s,t):l(t))||t);return a&&t&&R(e,s,t),t};let v=class extends f(z){constructor(){super(...arguments),this.bindCharts=new h(this,n),this.albumToVote={id:"",voter:0,time:0,value:0},this.moreVotes=[],this.morePending=!1,this.timeAgo=async function*(i){for(;;)yield M(i),await new Promise(e=>setTimeout(e,1e3))}}get isMobi(){return m.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}get loading(){return n.pending&&!n.votes.length}get empty(){return n.inited&&!n.votes.length}get votes(){return n.votes.concat(this.moreVotes)}render(){return r`<div role="list" class="ui-list bidders ${$(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-full">Bidders</div></div>${p(this.loading,()=>r`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${j([...Array(this.skeletonLen).keys()],()=>r`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>r`${j(this.votes,i=>r`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${i.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${i.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end text-right"><p class="opacity-95 text-base">${C(i.value)}</p><p class="relative text-right text-xs leading-none text-neutral-400 whitespace-nowrap h-3"><span class="absolute right-0">${A(this.timeAgo(i.time))}</span></p></div></div></div>`)}`)}</div>`}};x([c()],v.prototype,"albumToVote",2);x([c()],v.prototype,"moreVotes",2);x([c()],v.prototype,"morePending",2);v=x([w("latest-votes")],v);const E=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.ui-board{width:100%}@media (min-width: 1024px){.ui-board{width:30rem;flex:0 1 auto}}.ui-board:nth-of-type(1){flex-grow:1}@media (min-width: 1024px){.ui-board:nth-of-type(1){width:100%}}.ui-board:nth-of-type(1){width:var(--homeBoardHalf)}.ui-board:nth-of-type(2){flex-grow:1;width:var(--homeBoardHalf)}.ui-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.ui-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.ui-board:nth-of-type(1),.ui-board:nth-of-type(2){width:auto}}";var G=Object.defineProperty,I=Object.getOwnPropertyDescriptor,U=(i,e,s,a)=>{for(var t=a>1?void 0:a?I(e,s):e,o=i.length-1,l;o>=0;o--)(l=i[o])&&(t=(a?l(e,s,t):l(t))||t);return a&&t&&G(e,s,t),t};let _=class extends f(E){constructor(){super(...arguments),this.bindScreen=new h(this,m),this.bindStore=new h(this,y),this.bindWeekly=new h(this,u)}get isMobi(){return m.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return r`<div class="ui-pageview ui-container flex-col lg_flex-row place-content-center"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5>Weekly Chart</h5><div class="ui-board-subtitle">${p(u.latest,()=>r`${u.latestRange}, <span class="text-green-500">${u.latestLeft}</span> left`)}</div></div><div class="ui-board-lead">${p(y.inited,()=>r`<h5><span class="text-sm text-gray-300">Pool: </span><span class="ui-em text-xl">${y.weeklyPoolHumanized||"-"}</span></h5>`,()=>r`<i class="mdi mdi-loading"></i>`)}</div></div><weekly-top></weekly-top></div>${p(!0,()=>r`<div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="text-xl">All Chart<ui-link text class="ml-1 text-xs text-blue-300" href="${"/top"}">View all</ui-link></div></div></div><top-album></top-album></div><div class="ui-board"><div class="ui-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};_=U([w("view-home")],_);export{_ as ViewHome};