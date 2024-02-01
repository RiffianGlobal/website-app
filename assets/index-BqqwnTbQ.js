import{T as f,b,w as g,t as V,r as _}from"./index-IIZuvEFS.js";import{i as h,G as m,e as O,$ as D,x as o,j,n as p,B as P,u as c,c as M,g as w,a0 as L,a1 as q,a2 as A,a3 as T,a4 as C,a5 as W,f as H}from"./vendor-fjbkuLWx.js";import{s as N,c as l,p as K,w as z}from"./list-gRrDBzCI.js";var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,u=(i,e,s,a)=>{for(var t=a>1?void 0:a?X(e,s):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(t=(a?n(e,s,t):n(t))||t);return a&&t&&R(e,s,t),t};let d=class extends f(N){constructor(){super(...arguments),this.bindScreen=new h(this,m),this.bindBridge=new h(this,b),this.bindWeekly=new h(this,g),this.bindCharts=new h(this,l),this.paging=!1,this.brief=!0,this.moreSubjects=[],this.morePending=!1,this.err="",this.ts=0,this.pagination=K({pageNum:2}),this.hasMore=!0,this.fetch=async(i=!1)=>{if(!(this.morePending&&!i)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const s={week:await g.getLatest()};if(this.pagination){const{pageSize:t,pageNum:r}=this.pagination;Object.assign(s,{first:t,skip:(r-1)*t})}const{weeklySubjects:a}=await z(s);this.paging?(this.moreSubjects=[...this.moreSubjects,...a],this.hasMore=a.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...a]}catch(e){let s=e.message||e.code||e;this.err=e.message||e.msg||e,console.error(s)}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.go2=(i,e)=>{var s;i.preventDefault(),i.stopPropagation(),this.disabled?O.emit("connect-wallet"):((s=i.target)==null?void 0:s.tagName)=="I"?window.open(e.uri,"_blank"):D(`/track/${e.id}`)}}get disabled(){return!b.bridge.account}get isMobi(){return m.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get loading(){return l.pending&&!l.weeklySubjects.length}get empty(){return l.inited&&!l.weeklySubjects.length}get subjects(){return l.weeklySubjects.concat(this.moreSubjects)}render(){return o`<div role="list" class="ui-list gap-2 ${j(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-8">Rank</div><div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div></div>${p(this.loading,()=>o`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>o`${P(this.subjects,(i,e)=>o`<div class="item flex items-center" @click="${s=>this.go2(s,i)}"><div class="flex-none w-8 text-center text-sm font-light opacity-70">${e+1}</div><div class="flex-shrink flex justify-center"><img-loader .src="${i.cooked.src}" class="subject-img"></img-loader></div><div class="subject-lines flex-auto"><div class="subject-line1"><p class="subject-name ${j({limit:this.brief})}">${i.name}</p><a href="${i.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle"></i></a></div>${p(this.brief,()=>o`<div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${i.cooked.price}</div>`)}</div><div class="subject-lines num flex-initial !w-18 text-sm items-end"><span class="subject-line1">${i.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${i.cooked.chg}"></chg-stat></span></div></div>`)}`)}</div>${p(this.empty,()=>o`<p class="p-2 opacity-60">No votes yet.</p>`)} ${p(this.paging,()=>o`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`}};u([M({type:Boolean})],d.prototype,"paging",2);u([M({type:Boolean})],d.prototype,"brief",2);u([c()],d.prototype,"moreSubjects",2);u([c()],d.prototype,"morePending",2);u([c()],d.prototype,"err",2);u([c()],d.prototype,"ts",2);u([c()],d.prototype,"pagination",2);u([c()],d.prototype,"hasMore",2);d=u([w("weekly-top")],d);var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,B=(i,e,s,a)=>{for(var t=a>1?void 0:a?G(e,s):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(t=(a?n(e,s,t):n(t))||t);return a&&t&&E(e,s,t),t};let k=class extends f(""){constructor(){super(...arguments),this.bindBridge=new h(this,b),this.dialog=!1,this.open=()=>{this.disabled?O.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!b.bridge.account}render(){return o`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${p(this.dialog,()=>o`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};B([c()],k.prototype,"dialog",2);k=B([w("bind-social-btn")],k);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class I extends q{constructor(){super(...arguments),this._$Cq=new A(this),this._$CK=new T}render(e,s){return C}update(e,[s,a]){if(this.isConnected||this.disconnected(),s===this._$CX)return;this._$CX=s;let t=0;const{_$Cq:r,_$CK:n}=this;return W(s,async $=>{for(;n.get();)await n.get();const y=r.deref();if(y!==void 0){if(y._$CX!==s)return!1;a!==void 0&&($=a($,t)),y.commitValue($,t),t++}return!0}),C}commitValue(e,s){this.setValue(e)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const U=L(I),F="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{display:grid;min-height:20rem;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 1024px){.ui-list.bidders{row-gap:0px}}.ui-list.bidders>*:not(.header){padding-top:.75rem;padding-bottom:.75rem}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,x=(i,e,s,a)=>{for(var t=a>1?void 0:a?Q(e,s):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(t=(a?n(e,s,t):n(t))||t);return a&&t&&J(e,s,t),t};let v=class extends f(F){constructor(){super(...arguments),this.bindCharts=new h(this,l),this.albumToVote={id:"",voter:0,time:0,value:0},this.moreVotes=[],this.morePending=!1,this.timeAgo=async function*(i){for(;;)yield V(i),await new Promise(e=>setTimeout(e,1e3))}}get isMobi(){return m.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}get loading(){return l.pending&&!l.votes.length}get empty(){return l.inited&&!l.votes.length}get votes(){return l.votes.concat(this.moreVotes)}render(){return o`<div role="list" class="ui-list bidders ${j(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom"><div class="w-full">Bidders</div></div>${p(this.loading,()=>o`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${P([...Array(this.skeletonLen).keys()],()=>o`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>o`${P(this.votes,i=>o`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${i.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${i.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end text-right"><p class="opacity-95 text-base">${H(i.value)}</p><p class="relative text-right text-xs leading-none text-neutral-400 whitespace-nowrap h-3"><span class="absolute right-0">${U(this.timeAgo(i.time))}</span></p></div></div></div>`)}`)}</div>`}};x([c()],v.prototype,"albumToVote",2);x([c()],v.prototype,"moreVotes",2);x([c()],v.prototype,"morePending",2);v=x([w("latest-votes")],v);const Y=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.ui-board{width:100%}@media (min-width: 1024px){.ui-board{width:30rem;flex:0 1 auto}}.ui-board:nth-of-type(1){flex-grow:1}@media (min-width: 1024px){.ui-board:nth-of-type(1){width:100%}}.ui-board:nth-of-type(1){width:var(--homeBoardHalf)}.ui-board:nth-of-type(2){flex-grow:1;width:var(--homeBoardHalf)}.ui-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.ui-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.ui-board:nth-of-type(1),.ui-board:nth-of-type(2){width:auto}}";var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(i,e,s,a)=>{for(var t=a>1?void 0:a?ee(e,s):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(t=(a?n(e,s,t):n(t))||t);return a&&t&&Z(e,s,t),t};let S=class extends f(Y){constructor(){super(...arguments),this.bindScreen=new h(this,m),this.bindStore=new h(this,_),this.bindWeekly=new h(this,g)}get isMobi(){return m.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return o`<div class="ui-pageview ui-container flex-col lg_flex-row place-content-center"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5>Weekly Chart</h5><div class="ui-board-subtitle">${p(g.latest,()=>o`${g.latestRange}, <span class="text-green-500">${g.latestLeft}</span> left`)}</div></div><div class="ui-board-lead">${p(_.inited,()=>o`<h5><span class="text-sm text-gray-300">Pool: </span><span class="ui-em text-xl">${_.weeklyPoolHumanized||"-"}</span></h5>`,()=>o`<i class="mdi mdi-loading"></i>`)}</div></div><weekly-top></weekly-top></div>${p(!0,()=>o`<div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="text-xl">All Chart<ui-link text class="ml-1 text-xs text-blue-300" href="${"/top"}">View all</ui-link></div></div></div><top-album></top-album></div><div class="ui-board"><div class="ui-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};S=te([w("view-home")],S);export{S as ViewHome};
