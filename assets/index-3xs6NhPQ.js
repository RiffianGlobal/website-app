import{T as b,w as f,t as M,j as O,m as P,f as j,o as _,k as D}from"./index-0UMn_93N.js";import{m as v,U as x,e as y,a2 as L,x as i,f as C,q as T,n as p,O as k,J as d,j as u,l as w}from"./vendor-tqqTBR6w.js";import{h as S}from"./async-replace-k4T3-9i6.js";import{t as V,u as A}from"./action-ZIjTyPI5.js";import"./dialog-B3n_l8gj.js";const F="li.header{margin-bottom:.75rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:#a3a3a3;color:rgba(163,163,163,var(--tw-text-opacity))}li.item:hover{background-color:#ffffff0d}@media (min-width: 500px){.name{font-size:1rem;line-height:1.5rem}}.icon{font-size:1.5rem;line-height:2rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var z=Object.defineProperty,E=Object.getOwnPropertyDescriptor,h=(e,s,r,a)=>{for(var t=a>1?void 0:a?E(s,r):s,o=e.length-1,c;o>=0;o--)(c=e[o])&&(t=(a?c(s,r,t):c(t))||t);return a&&t&&z(s,r,t),t};let m=class extends b(F){constructor(){super(...arguments),this.bindWallet=new v(this,f),this.bindScreen=new v(this,x),this.weekly=!1,this.address="",this.trackList=[],this.pending=!1,this.err="",this.ts=0,this.go2=e=>{this.disabled?y.emit("connect-wallet"):L(`/track/${e.address}`)},this.timeAgo=async function*(e){for(;;)yield M(e),await new Promise(s=>setTimeout(s,1e3))},this.itemMobi=e=>i`<div class="w-full overflow-hidden flex gap-x-2"><div class="w-[3.25rem] h-[3.25rem] mr-2 rounded-lg"><img-loader src="${e.image}" class="w-[3.25rem] rounded-lg"></img-loader></div><div class="flex-auto flex flex-col"><div class="flex truncate items-center"><p class="truncate">${e.name}</p><a href="${e.uri}" class="flex-none ml-1.5" target="_blank"><i class="text-lg mdi mdi-play-circle-outline"></i></a></div><div class="mt-0.5 text-xs text-gray-300/60 opacity-80">${S(this.timeAgo(e.createdAt))}</div></div><div class="w-16 flex-none justify-center text-right"><div class="text-base">${e.totalVal}</div><div class="text-xs opacity-80">${e.supply}<span class="text-gray-300/60 ml-1">tickets</span></div></div></div>`,this.init=async()=>{this.pending=!0;try{let{user:{subjectsCreated:e}}=await V(this.address);this.trackList=e.map(s=>{const{totalVoteValue:r}=s;return{...s,totalVal:C(r)}})}catch(e){this.err=e.message||e.msg||e,O.add({summary:"Fetch failed",detail:this.err})}finally{this.pending=!1,this.ts++}},this.listen=P(this.init)}get isMobi(){return x.screen.isMobi}get disabled(){return!f.account}connectedCallback(){super.connectedCallback(),this.init(),y.on("manual-change",this.listen)}disconnectedCallback(){super.disconnectedCallback(),y.off("manual-change",this.listen)}render(){return i`<div role="list" class="ui-list py-4 md_py-6 ${T(this.$c([this.pending?"loading":"hover"]))}">${p(!this.isMobi,()=>i`<div class="flex header"><div class="flex-none w-16">Index</div><div class="flex-auto">Name</div><div class="flex-none w-40">Uploaded</div><div class="num flex-none">Voters</div><div class="num flex-none">Tickets</div><div class="num flex-none">Vote Value</div></div>`)} ${p(!this.ts&&!this.trackList.length,()=>i`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${k([...Array(3).keys()],()=>i`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>i`${k(this.trackList,(e,s)=>i`<div class="item flex py-2 pr-2 items-center cursor-pointer" @click="${()=>this.go2(e)}">${p(!this.isMobi,()=>i`<div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${s+1} ${p(this.trackList.length>3&&s<3,()=>i`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${e.image}" class="rounded-lg"></img-loader></div><div><p class="name truncate">${e.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-none md_w-40 text-xs text-gray-300/60">${j(e.createdAt)}</div><div class="num text-sm truncate">${e.fansNumber}</div><div class="num text-sm truncate">${e.supply}</div><div class="num text-sm">${e.totalVal}</div>`,()=>i`${this.itemMobi(e)}`)}</div>`)}`)}</div>`}};h([u({type:Boolean})],m.prototype,"weekly",2);h([u({type:String})],m.prototype,"address",2);h([d()],m.prototype,"trackList",2);h([d()],m.prototype,"pending",2);h([d()],m.prototype,"err",2);h([d()],m.prototype,"ts",2);m=h([w("track-list")],m);const I='.middle-dot-divider:after{content:"·";padding:0 .375rem;font-weight:600}';var U=Object.defineProperty,B=Object.getOwnPropertyDescriptor,n=(e,s,r,a)=>{for(var t=a>1?void 0:a?B(s,r):s,o=e.length-1,c;o>=0;o--)(c=e[o])&&(t=(a?c(s,r,t):c(t))||t);return a&&t&&U(s,r,t),t};const N=()=>({loading:"",tx:""});let l=class extends b(I){constructor(){super(...arguments),this.bindWallet=new v(this,f),this.bindTweets=new v(this,_),this.bindScreen=new v(this,x),this.weekly=!1,this.address="",this.retreatDisabled=!0,this.voteList=[],this.pending=!1,this.prompt=!1,this.dialog=!1,this.promptMessage="",this.err=N(),this.ts=0,this.updateErr=(e={})=>this.err=Object.assign({},this.err,e),this.init=async()=>{this.pending=!0;try{let e=await A(this.address);this.user=e.user,this.readFromTwitter()}catch(e){this.updateErr({load:e.message||e}),this.promptMessage=e,this.prompt=!0;return}finally{this.ts++,this.pending=!1}},this.close=()=>{this.dialog=!1,this.init()}}get isMobi(){return x.screen.isMobi}get disabled(){return!f.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(e){return Math.floor(Math.random()*e)}async readFromTwitter(){let{uri:e}=this.user.socials[0]??{};this.social=await _.fromUri(e,this.user.address)}render(){return i`<div class="mx-2 md_m-4 md_text-center">${p(!this.ts&&!this.err.loading,()=>i`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton></div></div>`,()=>i`${p(this.prompt,()=>i`<p class="text-center text-orange-600">${this.promptMessage}</p>`,()=>{var e;return i`<div class="py-4"><ui-address class="text-lg" .address="${this.user.address}" short avatar></ui-address><div class="md_my-4">${p((e=this.social)==null?void 0:e.id,()=>{var s,r,a,t;return i`<span class="text-sm md_text-base font-light middle-dot-divider">${(s=this.social)==null?void 0:s.name}<span class="ml-0.5">${p((r=this.social)==null?void 0:r.verified,()=>i`<i class="text-green-600 text-sm mdi mdi-check-decagram"></i>`)}</span></span><span class="text-sm md_text-base font-light"> <a href="${(a=this.social)==null?void 0:a.url}" class="text-blue-300" target="_blank">@${(t=this.social)==null?void 0:t.id}</a></span>`})}</div><div class="mt-4 md_mt-0.5 divide-x divide-white/20 md_divide-x-0"><span class="text-white/70 ${this.isMobi?"pr-6 inline-flex flex-col items-center":"middle-dot-divider"}"><span class="text-xs md_text-base">Holding</span><span class="ml-1 text-xl md_text-base text-blue-300">${this.user.holding??"-"}</span></span> <span class="text-white/70 ${this.isMobi?"pl-6 inline-flex flex-col items-center":""}"><span class="text-xs md_text-base">Reward Claimed</span> <span class="ml-1 text-xl md_text-base text-blue-300">${this.user.rewardClaimed?parseFloat((+C(this.user.rewardClaimed)).toFixed(2)):"-"}</span></span></div></div>`})}`)}</div>`}};n([u({type:Boolean})],l.prototype,"weekly",2);n([u({type:String})],l.prototype,"address",2);n([u({type:Promise})],l.prototype,"votes",2);n([d()],l.prototype,"myVotes",2);n([d()],l.prototype,"retreatDisabled",2);n([d()],l.prototype,"social",2);n([d()],l.prototype,"user",2);n([d()],l.prototype,"voteList",2);n([d()],l.prototype,"pending",2);n([d()],l.prototype,"prompt",2);n([d()],l.prototype,"dialog",2);n([d()],l.prototype,"promptMessage",2);n([d()],l.prototype,"err",2);n([d()],l.prototype,"ts",2);l=n([w("user-detail")],l);const R="";var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,$=(e,s,r,a)=>{for(var t=a>1?void 0:a?q(s,r):s,o=e.length-1,c;o>=0;o--)(c=e[o])&&(t=(a?c(s,r,t):c(t))||t);return a&&t&&W(s,r,t),t};let g=class extends b(R){constructor(){super(...arguments),this.addr="",this.address=""}async connectedCallback(){super.connectedCallback(),this.address=await D.getAddress(this.addr)}render(){return this.address?i`<div class="ui-container mx-auto flex flex-col place-content-center md_pt-10"><user-detail .address="${this.address}" class="md_mx-auto"></user-detail><div class="w-full inline-flex pb-2 border-b border-slate-50/10"><div class="py-1.5 px-3 text-base font-normal text-white/70 rounded-md">Tracks</div></div><track-list .address="${this.address}"></track-list></div>`:""}};$([u({type:String})],g.prototype,"addr",2);$([d()],g.prototype,"address",2);g=$([w("user-page")],g);export{g as TrackPage};
