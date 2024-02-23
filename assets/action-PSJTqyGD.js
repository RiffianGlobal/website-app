import{g as r}from"./index-AFcyFRWC.js";const t=(e,a={})=>r("MediaBoard",u(e,a)),o=e=>r("MediaBoard",d(e)),d=e=>`{
  user ( id: "${e.toLowerCase()}" ) {
    address, holding, rewardClaimed
    socials {
      id, pid, uri, platform
    }
    subjectsCreated {
      id
    }
  }
}`,u=(e,{first:a=0,skip:s=0}={})=>`{
  user ( id: "${e.toLowerCase()}" ) {
    subjectsCreated(orderBy: supply, orderDirection: desc${a>0?`, first: ${a}`:""}${s>0?`, ${s}`:""}) {
      address, createdAt, name, image, uri
      fansNumber, supply, totalVoteValue
      volumeTotal, volumeRetreat, volumeVote, lastVoteAt
    }
  }
}`,c=async e=>await t(e),n=async e=>await o(e);export{c as t,n as u};
