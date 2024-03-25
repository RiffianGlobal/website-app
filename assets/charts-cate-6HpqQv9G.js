import{T as y,s as M,w as j,a as _,c as h,d as k,g as w,f as O,C}from"./index-hSTK-UyP.js";import{a0 as z,x as s,q as v,n as a,j as n,l as x,m as f,U as P,O as S,J as m}from"./vendor-jTXZQQNv.js";const L=(e={})=>({pageNum:1,pageSize:10,hasMore:!0,...e}),D=":host{background-color:transparent!important}:host::part(inner){display:flex;height:2rem;width:100%;align-items:center;justify-content:center}@media (min-width: 1024px){:host::part(inner){height:2.5rem}}";var N=Object.defineProperty,B=Object.getOwnPropertyDescriptor,u=(e,t,o,r)=>{for(var i=r>1?void 0:r?B(t,o):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(i=(r?c(t,o,i):c(i))||i);return r&&i&&N(t,o,i),i};let p=class extends z(y(D),{persistent:!0,rootMargin:"30px"}){constructor(){super(...arguments),this.pageSize=5,this.page=1,this.mode="scroll",this.pending=!1,this.firstLoad=!0,this.empty=!1,this.nomore=!1,this.class="",this.loadmore=()=>{if(!this.canLoad)return;const{pageSize:e,page:t,mode:o}=this;this.emit("cc"),this.emit("loadmore",{pageSize:e,page:t,mode:o})},this.onObserved=()=>{this.scrollMode&&this.loadmore()}}get canLoad(){return!this.pending&&!this.nomore&&!this.empty&&!this.firstLoad}get scrollMode(){return this.mode==="scroll"}connectedCallback(){super.connectedCallback()}render(){return s`<div class="ui-pagination w-full flex justify-center items-center mt-4 ${v(this.$c([{nomore:this.nomore,"pointer-events-none !bg-transparent":!this.canLoad||this.scrollMode,scrollMode:this.scrollMode},this.class]))}"><div part="inner" @click="${this.loadmore}">${a(this.empty,()=>s`<slot name="empty"></slot>`,()=>s`${a(this.nomore,()=>s`<slot name="nomore"></slot>`,()=>s`${a(this.pending,()=>s`<slot name="loading"><loading-icon type="block"></loading-icon></slot>`,()=>s`${a(!this.scrollMode&&!this.firstLoad,()=>s`<slot><ui-link>Load more</ui-link></slot>`)}`)}`)}`)}</div></div>`}};u([n({type:Number})],p.prototype,"pageSize",2);u([n({type:Number})],p.prototype,"page",2);u([n()],p.prototype,"mode",2);u([n()],p.prototype,"pending",2);u([n({type:Boolean})],p.prototype,"firstLoad",2);u([n({type:Boolean})],p.prototype,"empty",2);u([n({type:Boolean})],p.prototype,"nomore",2);u([n()],p.prototype,"class",2);p=u([x("ui-pagination")],p);var E=Object.defineProperty,q=Object.getOwnPropertyDescriptor,g=(e,t,o,r)=>{for(var i=r>1?void 0:r?q(t,o):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(i=(r?c(t,o,i):c(i))||i);return r&&i&&E(t,o,i),i};let d=class extends y(M){constructor(){super(...arguments),this.bindScreen=new f(this,P),this.bindWallet=new f(this,j),this.bindWeekly=new f(this,_),this.bindCharts=new f(this,h),this.paging=!1,this.brief=!0,this.pageSize=10,this.moreSubjects=[],this.morePending=!1,this.ts=0,this.err="",this.pagination=L({pageNum:2,pageSize:this.pageSize}),this.hasMore=!0,this.fetch=async(e=!1)=>{if(!(this.morePending&&!e)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const t={cate:h.cate};if(this.pagination){const{pageSize:r,pageNum:i}=this.pagination;Object.assign(t,{first:r,skip:(i-1)*r})}const{subjects:o}=await k(t);this.paging?(this.moreSubjects=[...this.moreSubjects,...o],this.hasMore=o.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...o]}catch(t){this.err=t.message||t.msg||t}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.headerEle=()=>this.brief?s`${a(!this.isMobi,()=>s`<div class="w-8">Rank</div>`)}<div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div>`:s`${a(!this.isMobi,()=>s`<div class="w-16">Index</div>`)}<div class="flex-auto">Name</div>${a(!this.isMobi,()=>s`<div class="flex-none w-40">Uploaded</div>`)}<div class="num flex-none w-24">Volume</div>${a(!this.isMobi,()=>s`<div class="num flex-none w-24">Price</div><div class="num flex-none w-24">24H</div>`)}`,this.itemEle=(e,t)=>this.brief?s`<div class="item flex items-center" @click="${o=>w(o,e)}">${a(!this.isMobi,()=>s`<div class="flex-none w-8 text-center text-sm font-light opacity-70">${t+1}</div>`)}<div class="subject-img flex-shrink flex justify-center"><img-loader .src="${e.cooked.src}" class="w-14 rounded-lg"></img-loader></div><div class="subject-lines flex-auto overflow-hidden"><div class="subject-line1"><p class="subject-name ${v({limit:this.brief})}">${e.name}</p><a href="${e.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle-outline"></i></a></div>${a(this.brief,()=>s`<div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${e.cooked.price}</div>`)}</div><div class="subject-lines num flex-initial !w-12 text-sm items-end"><span class="subject-line1">${e.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${e.cooked.chg}"></chg-stat></span></div></div>`:s`${a(!this.isMobi,()=>s`<div class="item flex items-center hover_cursor-pointer" @click="${o=>w(o,e)}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${t+1} ${a(this.subjects.length>3&&t<3,()=>s`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex overflow-hidden"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${e.cooked.src}" class="w-[3.25rem] h-[3.25rem] rounded-lg"></img-loader></div><div class="truncate"><p class="subject-name subject-line1 lg_text-base truncate w-full">${e.name}</p><i class="subject-play mdi mdi-play-circle"></i></div></div><div class="flex-none w-40 text-xs text-gray-300/60">${O(e.createdAt)}</div><div class="flex-none w-24 text-right text-sm"><span>${e.cooked.total}</span></div><div class="flex-none w-24 text-right text-sm"><span>${e.cooked.price}</span></div><div class="flex-none w-24 text-right text-sm leading-none"><span><chg-stat .chg="${e.cooked.chg}"></chg-stat></span></div></div>`,()=>s`fx<subject-brief .subject="${e}"></subject-brief>`)}`}get disabled(){return!j.account}get isMobi(){return P.isMobi}get scrollMode(){return"scroll"}get empty(){return h.inited&&!h.subjects.length}get loading(){return h.chartPending&&!h.subjects.length}get subjects(){return this.empty?[]:h.subjects.concat(this.moreSubjects)}render(){return s`<div role="list" class="ui-list gap-2 ${v(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom">${this.headerEle()}</div>${a(this.loading,()=>s`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>s`${S(this.subjects,(e,t)=>s`${this.itemEle(e,t)}`)} ${a(this.paging,()=>s`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`,()=>s`<ui-link dense class="w-full justify-center" href="/charts">More</ui-link>`)}`)}</div>`}};g([n({type:Boolean})],d.prototype,"paging",2);g([n({type:Boolean})],d.prototype,"brief",2);g([n({type:Number})],d.prototype,"pageSize",2);g([m()],d.prototype,"moreSubjects",2);g([m()],d.prototype,"morePending",2);g([m()],d.prototype,"ts",2);g([m()],d.prototype,"err",2);g([m()],d.prototype,"pagination",2);g([m()],d.prototype,"hasMore",2);d=g([x("top-charts")],d);const I=":host{display:inline-flex;gap:2rem}";var T=Object.defineProperty,U=Object.getOwnPropertyDescriptor,$=(e,t,o,r)=>{for(var i=r>1?void 0:r?U(t,o):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(i=(r?c(t,o,i):c(i))||i);return r&&i&&T(t,o,i),i};let b=class extends y(I){constructor(){super(...arguments),this.bindChart=new f(this,h),this.cate="top",this.route=!1,this.goto=(e,t)=>{this.route||(e.stopImmediatePropagation(),e.preventDefault(),h.cate=t)}}render(){return s`${S(C,e=>s`<ui-link href="/charts/${e.key}" @click="${t=>this.goto(t,e.key)}" nav dense exact class="${v({"exact-active":h.cate===e.key})}">${e.title}</ui-link>`)}`}};$([n({type:String})],b.prototype,"cate",2);$([n({type:Boolean})],b.prototype,"route",2);b=$([x("charts-cate")],b);export{L as p};