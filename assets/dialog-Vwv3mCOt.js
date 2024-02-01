import{c as p,h as x,i as f,n as $,u as S,d as V,T as j,b as C,l as g}from"./index-IIZuvEFS.js";import{i as y,e as F,f as u,x as c,n as d,a8 as v,u as l,c as m,g as T}from"./vendor-fjbkuLWx.js";const _=async(t,e,a)=>{const s=await p(),o="vote",n={},h=[t,e,a];await x(n,s,o,h);const P=s[o](...h);return new f(P,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:$(),overrides:n}})},A=async(t,e)=>{const a=await p(),s="retreat",o={},n=[t,e];await x(o,a,s,n);const h=a[s](...n);return new f(h,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:$(),overrides:o}})},E=async t=>S(t,await V()),O=async t=>{try{const e=await p(!0),a="getRetreatPrice",s=[t,1];return await e[a](...s)}catch{return 0}},w=async t=>{const e=await p(!0),a="getVotePriceWithFee",s={},o=[t,1];return await x(s,e,a,o),await e[a](...o)};var R=Object.defineProperty,k=Object.getOwnPropertyDescriptor,r=(t,e,a,s)=>{for(var o=s>1?void 0:s?k(e,a):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(o=(s?h(e,a,o):h(o))||o);return s&&o&&R(e,a,o),o};const b=()=>({tx:""});let i=class extends j(""){constructor(){super(...arguments),this.bindBridge=new y(this,C),this.bindTweets=new y(this,g),this.action="",this.album="",this.url="",this.name="",this.author="",this.myVotes=0,this.votePrice=0,this.voteFee=0,this.retreatPrice=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=b(),this.ts=0,this.resetState=()=>{this.err=b(),this.pending=!1,this.success=!1,this.votePrice=0,this.retreatPrice=0,this.votes=void 0},this.emitChange=()=>{this.emit("change"),F.emit("manual-change")},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}async connectedCallback(){super.connectedCallback(),await this.getPrice(),await this.readFromTwitter(),this.ts++}get hasVoted(){return this.ts&&+u(this.myVotes,1)>0}async readFromTwitter(){this.social=await g.fromAddress(this.author)}async getPrice(){try{const[[t,e],a,s]=await Promise.all([w(this.album),O(this.album),E(this.album)]);this.votePrice=u(e).toString(),this.voteFee=u(t-e).toString(),this.retreatPrice=u(a),this.myVotes=s}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}}async vote(){this.pending=!0;try{this.tx=await _(this.album,1,{value:(await w(this.album))[0]}),this.success=await this.tx.wait(),this.emitChange()}catch(t){let e=t.message||t.code;if(t.code===4001)return this.updateErr({tx:e}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await A(this.album,1),this.success=await this.tx.wait(),await this.emitChange()}catch(t){let e=t.message||t.code;if(t.code===4001)return this.updateErr({tx:e}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){var t,e;return c`<ui-dialog
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
              <div class="text-sm">${(t=this.social)==null?void 0:t.name}</div>
              ${d((e=this.social)==null?void 0:e.id,()=>{var a,s;return c`
                  <a class="text-sm text-blue-300" href="${(a=this.social)==null?void 0:a.url}" target="_blank">@${(s=this.social)==null?void 0:s.id}</a>
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
    </ui-dialog>`}};r([m({type:String})],i.prototype,"action",2);r([m({type:String})],i.prototype,"album",2);r([m({type:String})],i.prototype,"url",2);r([m({type:String})],i.prototype,"name",2);r([m({type:String})],i.prototype,"author",2);r([m({type:Promise})],i.prototype,"votes",2);r([l()],i.prototype,"myVotes",2);r([l()],i.prototype,"votePrice",2);r([l()],i.prototype,"voteFee",2);r([l()],i.prototype,"retreatPrice",2);r([l()],i.prototype,"social",2);r([l()],i.prototype,"tx",2);r([l()],i.prototype,"success",2);r([l()],i.prototype,"pending",2);r([l()],i.prototype,"rewards",2);r([l()],i.prototype,"err",2);r([l()],i.prototype,"ts",2);i=r([T("vote-album-dialog")],i);export{E as m};
