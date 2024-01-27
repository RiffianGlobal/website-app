import{T as b,b as y,o as x}from"./index-ELEgx-y1.js";import{c as g,e as f,f as n,x as i,n as h,a7 as m,k as r,a as d,b as w}from"./vendor-ZShkCVbx.js";import{b as $,m as P,v as V,r as S,c as k,d as D,e as T}from"./action-PHRCZXe5.js";var C=Object.defineProperty,_=Object.getOwnPropertyDescriptor,s=(t,a,c,o)=>{for(var l=o>1?void 0:o?_(a,c):a,p=t.length-1,u;p>=0;p--)(u=t[p])&&(l=(o?u(a,c,l):u(l))||l);return o&&l&&C(a,c,l),l};const v=()=>({tx:""});let e=class extends b(""){constructor(){super(...arguments),this.bindBridge=new g(this,y),this.bindTweets=new g(this,x),this.action="",this.album="",this.url="",this.name="",this.author="",this.myVotes=0,this.retreatPrice=0,this.retreatDisabled=!0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=v(),this.ts=0,this.resetState=()=>{this.err=v(),this.pending=!1,this.success=!1,this.price=void 0,this.votes=void 0},this.emitChange=()=>{this.emit("change"),f.emit("manual-change")},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}async connectedCallback(){super.connectedCallback(),await this.getPrice(),await this.readFromTwitter(),this.ts++}get hasVoted(){return this.ts&&+n(this.myVotes,1)>0}async readFromTwitter(){this.social=await x.fromAddress(this.author)}async getPrice(){try{this.votes=$(this.album).then(t=>t[4]),this.myVotes=await P(this.album).then(t=>(t>0&&(this.retreatDisabled=!1),t)),this.price=V(this.album).then(t=>n(t)),this.retreatPrice=await S(this.album).then(t=>n(t))}catch(t){let a=t.message||t.code;this.updateErr({tx:a})}}async vote(){this.pending=!0;try{this.tx=await D(this.album,1,{value:(await k(this.album))[0]}),this.success=await this.tx.wait(),this.emitChange()}catch(t){let a=t.message||t.code;if(t.code===4001)return this.updateErr({tx:a}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}async retreat(){this.pending=!0;try{this.tx=await T(this.album,1),this.success=await this.tx.wait(),await this.emitChange()}catch(t){let a=t.message||t.code;if(t.code===4001)return this.updateErr({tx:a}),this.close();this.tx||(this.tx={},this.tx.status=0,this.tx.err=t)}}render(){var t,a,c;return i`<ui-dialog
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
                ${h((t=this.social)==null?void 0:t.verified,()=>i`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${(a=this.social)==null?void 0:a.name}
              </div>
              ${h((c=this.social)==null?void 0:c.id,()=>{var o,l;return i`
                  <a class="text-sm text-blue-300" href="${(o=this.social)==null?void 0:o.url}" target="_blank">@${(l=this.social)==null?void 0:l.id}</a>
                `},()=>i`-`)}

              <div class="text-neutral-400">
                You own
                ${h(this.ts,()=>i`${n(this.myVotes,0)}`,()=>i`<i class="text-sm mdi mdi-loading"></i>`)}
                tickets
              </div>
            </div>
          </div>
          <!-- Tickets -->
          <div class="text-right">
            <span class="text-lg text-sky-500"
              >${m(this.votes,i`<i class="text-sm mdi mdi-loading"></i>`)}</span
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
          ${h(!this.pending,()=>i`
              ${h(this.ts&&this.action==="vote",()=>i`
                  <div class="flex flex-col justify-center items-center px-4">
                    <div>
                      <span class="text-2xl">${m(this.price,i`<i class="text-sm mdi mdi-loading"></i>`)}</span>
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
              ${h(this.ts&&this.hasVoted&&this.action==="retreat",()=>i`
                  <div class="flex flex-col justify-center items-center px-4 border-white/12">
                    <div class="text-2xl">
                      ${m(this.retreatPrice,i`<i class="text-sm mdi mdi-loading"></i>`)}
                    </div>

                    <ui-button
                      class="mt-3 w-full"
                      ?disabled=${this.retreatDisabled}
                      ?pending=${this.retreatDisabled}
                      @click=${this.retreat}
                      >Retreat</ui-button
                    >
                  </div>
                `)}
              <!-- <div class="text-sm text-gray-500">
                Retreat price: ${m(this.retreatPrice,i`<i class="text-sm mdi mdi-loading"></i>`)} FTM
              </div> -->
            `,()=>i`<tx-state .tx=${this.tx} .opts=${{state:{success:"Success. Your vote has been submitted."}}}
                ><ui-button slot="view" @click=${this.close}>Close</ui-button></tx-state
              >`)}
        </div>
      </div>
    </ui-dialog>`}};s([d({type:String})],e.prototype,"action",2);s([d({type:String})],e.prototype,"album",2);s([d({type:String})],e.prototype,"url",2);s([d({type:String})],e.prototype,"name",2);s([d({type:String})],e.prototype,"author",2);s([d({type:Promise})],e.prototype,"votes",2);s([r()],e.prototype,"myVotes",2);s([r()],e.prototype,"price",2);s([r()],e.prototype,"retreatPrice",2);s([r()],e.prototype,"retreatDisabled",2);s([r()],e.prototype,"social",2);s([r()],e.prototype,"tx",2);s([r()],e.prototype,"success",2);s([r()],e.prototype,"pending",2);s([r()],e.prototype,"rewards",2);s([r()],e.prototype,"err",2);s([r()],e.prototype,"ts",2);e=s([w("vote-album-dialog")],e);
