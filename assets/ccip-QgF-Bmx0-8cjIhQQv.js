import{m as g,u as k,M as x,h as L,J as m,o as h,a as O,T as f,b as w,k as p,D as b}from"./index-WkshnyIm.js";import"./index-AFcyFRWC.js";import"./vendor-KMCe_Sr5.js";class M extends f{constructor({callbackSelector:e,cause:a,data:l,extraData:n,sender:u,urls:t}){var c;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(c=a.metaMessages)!=null&&c.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(d=>`    ${w(d)}`)],`  Sender: ${u}`,`  Data: ${l}`,`  Callback selector: ${e}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class T extends f{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${m(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends f{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function S(s,e){if(!p(s))throw new b({address:s});if(!p(e))throw new b({address:e});return s.toLowerCase()===e.toLowerCase()}const P="0x556f1830",v={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function j(s,{blockNumber:e,blockTag:a,data:l,to:n}){const{args:u}=g({data:l,abi:[v]}),[t,c,d,r,o]=u;try{if(!S(n,t))throw new $({sender:t,to:n});const i=await C({data:d,sender:t,urls:c}),{data:y}=await L(s,{blockNumber:e,blockTag:a,data:x([r,k([{type:"bytes"},{type:"bytes"}],[i,o])]),to:n});return y}catch(i){throw new M({callbackSelector:r,cause:i,data:l,extraData:o,sender:t,urls:c})}}async function C({data:s,sender:e,urls:a}){var l;let n=new Error("An unknown error occurred.");for(let u=0;u<a.length;u++){const t=a[u],c=t.includes("{data}")?"GET":"POST",d=c==="POST"?{data:s,sender:e}:void 0;try{const r=await fetch(t.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(d),method:c});let o;if((l=r.headers.get("Content-Type"))!=null&&l.startsWith("application/json")?o=(await r.json()).data:o=await r.text(),!r.ok){n=new h({body:d,details:o!=null&&o.error?m(o.error):r.statusText,headers:r.headers,status:r.status,url:t});continue}if(!O(o)){n=new T({result:o,url:t});continue}return o}catch(r){n=new h({body:d,details:r.message,url:t})}}throw n}export{C as ccipFetch,j as offchainLookup,v as offchainLookupAbiItem,P as offchainLookupSignature};
