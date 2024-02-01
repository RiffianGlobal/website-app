import{c as p,h as x,i as b,n as $,u as S,d as V,T as j,b as C,l as g}from"./index-Be9je0zv.js";import{i as y,e as F,f as u,x as c,n as d,a8 as v,u as n,c as m,g as T}from"./vendor-dtnumNs5.js";const _=async(t,e,r)=>{const s=await p(),i="vote",l={},h=[t,e,r];await x(l,s,i,h);const P=s[i](...h);return new b(P,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:$(),overrides:l}})},A=async(t,e)=>{const r=await p(),s="retreat",i={},l=[t,e];await x(i,r,s,l);const h=r[s](...l);return new b(h,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:$(),overrides:i}})},E=async t=>S(t,await V()),O=async t=>{try{const e=await p(!0),r="getRetreatPrice",s=[t,1];return await e[r](...s)}catch{return 0}},w=async t=>{const e=await p(!0),r="getVotePriceWithFee",s={},i=[t,1];return await x(s,e,r,i),await e[r](...i)};var R=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(t,e,r,s)=>{for(var i=s>1?void 0:s?k(e,r):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(i=(s?h(e,r,i):h(i))||i);return s&&i&&R(e,r,i),i};const f=()=>({tx:""});let a=class extends j(""){constructor(){super(...arguments),this.bindBridge=new y(this,C),this.bindTweets=new y(this,g),this.action="",this.album="",this.url="",this.name="",this.author="",this.myVotes=0,this.votePrice=0,this.voteFee=0,this.retreatPrice=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=f(),this.ts=0,this.resetState=()=>{this.err=f(),this.pending=!1,this.success=!1,this.votePrice=0,this.retreatPrice=0,this.votes=void 0},this.emitChange=()=>{this.emit("change"),F.emit("manual-change")},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}async connectedCallback(){super.connectedCallback(),await this.getPrice(),await this.readFromTwitter(),this.ts++}get hasVoted(){return this.ts&&+u(this.myVotes,1)>0}async readFromTwitter(){this.social=await g.fromAddress(this.author)}async getPrice(){try{const[[t,e],r,s]=await Promise.all([w(this.album),O(this.album),E(this.album)]);this.votePrice=u(e).toString(),this.voteFee=u(t-e).toString(),this.retreatPrice=u(r),this.myVotes=s}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}}async vote(){this.pending=!0;try{this.tx=await _(this.album,1,{value:(await w(this.album))[0]}),this.success=await this.tx.wait(),this.emitChange()}catch(t){let e=t.message||t.code;if(t.code===4001)return this.updateErr({tx:e}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await A(this.album,1),this.success=await this.tx.wait(),await this.emitChange()}catch(t){let e=t.message||t.code;if(t.code===4001)return this.updateErr({tx:e}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){var t,e,r;return c`<ui-dialog
      @close=${()=>{this.close()}}
    >
      <p slot="header" class="w-full text-base mr-2">Vote</p>
      <div slot="center" class="flex mx-4 my-6">
        <div class="flex grow justify-between p-4 border border-white/15 rounded-xl">
          <!-- meta info -->
          <div class="flex gap-6">
            <div class="w-24 h-24 rounded-lg bg-white/10">
              <img-loader class="w-24 h-24 rounded-lg" src=${this.url}></img-loader>
            </div>
            <div>
              <div class="text-lg mb-1.5">${this.name}</div>
              <div class="text-sm">
                ${d((t=this.social)==null?void 0:t.verified,()=>c`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${(e=this.social)==null?void 0:e.name}
              </div>
              ${d((r=this.social)==null?void 0:r.id,()=>{var s,i;return c`
                  <a class="text-sm text-blue-300" href="${(s=this.social)==null?void 0:s.url}" target="_blank">@${(i=this.social)==null?void 0:i.id}</a>
                `},()=>c`-`)}

              <div class="text-neutral-400">
                You own
                ${d(this.ts,()=>c`${u(this.myVotes,0)}`,()=>c`<i class="text-sm mdi mdi-loading"></i>`)}
                tickets
              </div>
            </div>
          </div>
          <!-- Tickets -->
          <div class="flex flex-col justify-center items-center">
            <span class="text-xl font-medium">${v(this.votes,c`<i class="text-sm mdi mdi-loading"></i>`)}</span>
            <div class="text-sm text-gray-500">Tickets</div>
          </div>
        </div>
        <!-- tip -->
      </div>
      <div slot="bottom" class="mx-4 pb-8">
        <p class="w-full flex justify-between items-center">
          Price
          <span class="text-right"
            ><span class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></span
          ></span>
        </p>
        <div class="mt-8">
          ${d(!this.pending,()=>c`
              ${d(this.ts&&this.action==="vote",()=>c`
                  <div class="flex flex-col justify-center items-center px-4">
                    <div class="flex flex-col justify-center items-center">
                      ${d(this.votePrice>0,()=>c`<span class="text-3xl ml-4 text-yellow-500">${this.votePrice}</span>
                            <span class="opacity-80 ml-2">(${this.voteFee} fee included)</span>`,()=>c`<i class="text-sm mdi mdi-loading"></i>`)}
                    </div>
                    <ui-button
                      class="mt-3 w-full md_w-36"
                      ?disabled=${this.pending}
                      ?pending=${this.pending}
                      @click=${this.vote}
                      >Vote</ui-button
                    >
                  </div>
                `)}
              ${d(this.ts&&this.hasVoted&&this.action==="retreat",()=>c`
                  <div class="flex flex-col justify-center items-center px-4 border-white/12">
                    <div class="text-2xl">
                      ${v(this.retreatPrice,c`<i class="text-sm mdi mdi-loading"></i>`)}
                    </div>

                    <ui-button
                      class="mt-3 w-full"
                      ?disabled=${this.pending}
                      ?pending=${this.pending}
                      @click=${this.retreat}
                      >Retreat</ui-button
                    >
                  </div>
                `)}
              <!-- <div class="text-sm text-gray-500">
                Retreat price: ${v(this.retreatPrice,c`<i class="text-sm mdi mdi-loading"></i>`)} FTM
              </div> -->
            `,()=>c`<tx-state .tx=${this.tx} .opts=${{state:{success:"Success. Your vote has been submitted."}}}
                ><ui-button slot="view" @click=${this.close}>Close</ui-button></tx-state
              >`)}
        </div>
      </div>
    </ui-dialog>`}};o([m({type:String})],a.prototype,"action",2);o([m({type:String})],a.prototype,"album",2);o([m({type:String})],a.prototype,"url",2);o([m({type:String})],a.prototype,"name",2);o([m({type:String})],a.prototype,"author",2);o([m({type:Promise})],a.prototype,"votes",2);o([n()],a.prototype,"myVotes",2);o([n()],a.prototype,"votePrice",2);o([n()],a.prototype,"voteFee",2);o([n()],a.prototype,"retreatPrice",2);o([n()],a.prototype,"social",2);o([n()],a.prototype,"tx",2);o([n()],a.prototype,"success",2);o([n()],a.prototype,"pending",2);o([n()],a.prototype,"rewards",2);o([n()],a.prototype,"err",2);o([n()],a.prototype,"ts",2);a=o([T("vote-album-dialog")],a);export{E as m};
