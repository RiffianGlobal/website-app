import{g as u,a as n,e as i,h as d,n as l,u as y,c as w}from"./index-aEE9fcnD.js";const p=(s,{first:t=10,skip:e=0}={})=>{let r=`{
    subjects(
      where: { creator_starts_with: "0x" }${t>0?`, first: ${t}`:""}${e>0?`, skip: ${e}`:""}
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
  }`;return u("MediaBoard",r)},g=(s,t,{first:e=0,skip:r=0}={})=>{let a=`{
    subjectWeeklyVotes(
      where: { week: ${s} }${e>0?` ,first: ${e}`:""}${r>0?` ,skip: ${r}`:""}
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
          where: { time_lt: ${t.toString()} } 
          orderBy: time, orderDirection: desc
        ) {
          supply
        }
      }
    }
  }`;return u("MediaBoard",a)},b=async(s,t,e)=>{const r=await n(),a="vote",o={},c=[s,t,e];await i(o,r,a,c);const m=r[a](...c);return new d(m,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:l(),overrides:o}})},v=async(s,t)=>{const e=await n(),r="retreat",a={},o=[s,t];await i(a,e,r,o);const c=e[r](...o);return new d(c,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:l(),overrides:a}})},$=async s=>y(s,await w()),j=async s=>{try{const t=await n(!0),e="getRetreatPrice",r=[s,1];return await t[e](...r)}catch{return 0}},B=async s=>{const t=await n(!0),e="getVotePriceWithFee",r={},a=[s,1];return await i(r,t,e,a),await t[e](...a)},S=async(s,{first:t,skip:e}={})=>{const r=24n*60n*60n;let a=BigInt(new Date().getTime())/1000n-r;return g(s,a,{first:t,skip:e})},V=async({first:s=0,skip:t=0}={})=>{const e=24n*60n*60n;let r=BigInt(new Date().getTime())/1000n-e;return p(r,{first:s,skip:t})};export{V as a,b,v as c,$ as m,j as r,B as v,S as w};
