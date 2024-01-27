import{g as u,a as o,e as i,h as d,n as m,u as y,c as w}from"./index-ELEgx-y1.js";const p=(s,{first:e=10,skip:t=0}={})=>{let r=`{
    subjects(
      where: { creator_starts_with: "0x" }${e>0?`, first: ${e}`:""}${t>0?`, skip: ${t}`:""}
      orderBy: supply, orderDirection: desc
    ) {
      id, image, name, uri, supply, createdAt, totalVoteValue
      creator {
        address
      }
      voteLogs(
        first: 1
        where: { time_lt: ${s} }
        orderBy: time, orderDirection: desc
      ) {
        supply
      }
    }
  }`;return u("MediaBoard",r)},g=(s,e,{first:t=0,skip:r=0}={})=>{let a=`{
    subjectWeeklyVotes(
      where: { week: ${s} }${t>0?` ,first: ${t}`:""}${r>0?` ,skip: ${r}`:""}
      orderBy: volumeTotal, orderDirection: desc
    ) {
      id
      volumeTotal
      subject {
        id, name, image, uri, supply
        creator {
          address
        }
        voteLogs(
          first: 1
          where: { time_lt: ${e.toString()} } 
          orderBy: time, orderDirection: desc
        ) {
          supply
        }
      }
    }
  }`;return u("MediaBoard",a)},b=async(s,e,t)=>{const r=await o(),a="vote",c={},n=[s,e,t];await i(c,r,a,n);const l=r[a](...n);return new d(l,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:m(),overrides:c}})},v=async(s,e)=>{const t=await o(),r="retreat",a={},c=[s,e];await i(a,t,r,c);const n=t[r](...c);return new d(n,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:m(),overrides:a}})},j=async s=>{const e=await o(!0),t="subjectToData",r={},a=[s];return await i(r,e,t,a),await e[t](...a)},$=async s=>y(s,await w()),B=async s=>{try{const e=await o(!0),t="getRetreatPrice",r=[s,1];return await e[t](...r)}catch{return 0}},S=async s=>{const e=await o(!0),t="getVotePrice",r=[s,1];return await e[t](...r)},V=async s=>{const e=await o(!0),t="getVotePriceWithFee",r={},a=[s,1];return await i(r,e,t,a),await e[t](...a)},D=async(s,{first:e,skip:t}={})=>{const r=24n*60n*60n;let a=BigInt(new Date().getTime())/1000n-r;return g(s,a,{first:e,skip:t})},P=async({first:s=0,skip:e=0}={})=>{const t=24n*60n*60n;let r=BigInt(new Date().getTime())/1000n-t;return p(r,{first:s,skip:e})};export{P as a,j as b,V as c,b as d,v as e,$ as m,B as r,S as v,D as w};
