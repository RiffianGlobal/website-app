import{T as b,b as f,o as v}from"./index-aEE9fcnD.js";import{c as x,e as w,f as d,x as a,n as h,a7 as u,k as r,a as n,b as $}from"./vendor-IEWwncHp.js";import{v as g,r as P,m as S,b as V,c as k}from"./action-fTuKAMk8.js";var T=Object.defineProperty,C=Object.getOwnPropertyDescriptor,s=(t,i,c,l)=>{for(var o=l>1?void 0:l?C(i,c):i,m=t.length-1,p;m>=0;m--)(p=t[m])&&(o=(l?p(i,c,o):p(o))||o);return l&&o&&T(i,c,o),o};const y=()=>({tx:""});let e=class extends b(""){constructor(){super(...arguments),this.bindBridge=new x(this,f),this.bindTweets=new x(this,v),this.action="",this.album="",this.url="",this.name="",this.author="",this.myVotes=0,this.votePrice=0,this.voteFee=0,this.retreatPrice=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=y(),this.ts=0,this.resetState=()=>{this.err=y(),this.pending=!1,this.success=!1,this.votePrice=0,this.retreatPrice=0,this.votes=void 0},this.emitChange=()=>{this.emit("change"),w.emit("manual-change")},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}async connectedCallback(){super.connectedCallback(),await this.getPrice(),await this.readFromTwitter(),this.ts++}get hasVoted(){return this.ts&&+d(this.myVotes,1)>0}async readFromTwitter(){this.social=await v.fromAddress(this.author)}async getPrice(){try{const[[t,i],c,l]=await Promise.all([g(this.album),P(this.album),S(this.album)]);this.votePrice=d(i).toString(),this.voteFee=d(t-i).toString(),this.retreatPrice=d(c),this.myVotes=l}catch(t){let i=t.message||t.code;this.updateErr({tx:i})}}async vote(){this.pending=!0;try{this.tx=await V(this.album,1,{value:(await g(this.album))[0]}),this.success=await this.tx.wait(),this.emitChange()}catch(t){let i=t.message||t.code;if(t.code===4001)return this.updateErr({tx:i}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await k(this.album,1),this.success=await this.tx.wait(),await this.emitChange()}catch(t){let i=t.message||t.code;if(t.code===4001)return this.updateErr({tx:i}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){var t,i,c;return a`<ui-dialog
      @close=${()=>{this.close()}}
    >
      <p slot="header" class="w-full text-base mr-2">Vote Track</p>
      <div slot="center" class="flex mx-4 my-6">
        <div class="flex grow justify-between p-4 bg-black/20">
          <!-- meta info -->
          <div class="flex gap-6">
            <div class="w-24 h-24 rounded-lg bg-white/10">
              <img-loader class="w-24 h-24 rounded-lg" src=${this.url}></img-loader>
            </div>
            <div>
              <div class="text-lg mb-1.5">${this.name}</div>
              <div class="text-sm">
                ${h((t=this.social)==null?void 0:t.verified,()=>a`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${(i=this.social)==null?void 0:i.name}
              </div>
              ${h((c=this.social)==null?void 0:c.id,()=>{var l,o;return a`
                  <a class="text-sm text-blue-300" href="${(l=this.social)==null?void 0:l.url}" target="_blank">@${(o=this.social)==null?void 0:o.id}</a>
                `},()=>a`-`)}

              <div class="text-neutral-400">
                You own
                ${h(this.ts,()=>a`${d(this.myVotes,0)}`,()=>a`<i class="text-sm mdi mdi-loading"></i>`)}
                tickets
              </div>
            </div>
          </div>
          <!-- Tickets -->
          <div class="text-right">
            <span class="text-lg text-sky-500"
              >${u(this.votes,a`<i class="text-sm mdi mdi-loading"></i>`)}</span
            >
            <div class="text-sm text-gray-500">Tickets</div>
          </div>
        </div>
        <!-- tip -->
      </div>
      <div slot="bottom" class="mx-4 pb-8">
        <p class="w-full flex justify-between items-center">
          It will cost
          <span class="text-right"
            ><span class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></span
          ></span>
        </p>
        <div class="mt-8">
          ${h(!this.pending,()=>a`
              ${h(this.ts&&this.action==="vote",()=>a`
                  <div class="flex flex-col justify-center items-center px-4">
                    <div>
                      ${h(this.votePrice>0,()=>a`<span class="text-2xl ml-4">${this.votePrice}</span>
                            <span class="opacity-80 ml-2">(${this.voteFee} fee included)</span>`,()=>a`<i class="text-sm mdi mdi-loading"></i>`)}
                    </div>
                    <ui-button
                      class="mt-3 w-full"
                      ?disabled=${this.pending}
                      ?pending=${this.pending}
                      @click=${this.vote}
                      >Vote</ui-button
                    >
                  </div>
                `)}
              ${h(this.ts&&this.hasVoted&&this.action==="retreat",()=>a`
                  <div class="flex flex-col justify-center items-center px-4 border-white/12">
                    <div class="text-2xl">
                      ${u(this.retreatPrice,a`<i class="text-sm mdi mdi-loading"></i>`)}
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
                Retreat price: ${u(this.retreatPrice,a`<i class="text-sm mdi mdi-loading"></i>`)} FTM
              </div> -->
            `,()=>a`<tx-state .tx=${this.tx} .opts=${{state:{success:"Success. Your vote has been submitted."}}}
                ><ui-button slot="view" @click=${this.close}>Close</ui-button></tx-state
              >`)}
        </div>
      </div>
    </ui-dialog>`}};s([n({type:String})],e.prototype,"action",2);s([n({type:String})],e.prototype,"album",2);s([n({type:String})],e.prototype,"url",2);s([n({type:String})],e.prototype,"name",2);s([n({type:String})],e.prototype,"author",2);s([n({type:Promise})],e.prototype,"votes",2);s([r()],e.prototype,"myVotes",2);s([r()],e.prototype,"votePrice",2);s([r()],e.prototype,"voteFee",2);s([r()],e.prototype,"retreatPrice",2);s([r()],e.prototype,"social",2);s([r()],e.prototype,"tx",2);s([r()],e.prototype,"success",2);s([r()],e.prototype,"pending",2);s([r()],e.prototype,"rewards",2);s([r()],e.prototype,"err",2);s([r()],e.prototype,"ts",2);e=s([$("vote-album-dialog")],e);
