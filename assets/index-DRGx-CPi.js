import{T as v,c as l}from"./index-YW2BmXRX.js";import"./charts-cate-d-Chwnve.js";import{m as d,x as n,I as h,j as u,l as f}from"./vendor-28BfryBT.js";const m="";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,p=(o,t,a,r)=>{for(var e=r>1?void 0:r?w(t,a):t,s=o.length-1,i;s>=0;s--)(i=o[s])&&(e=(r?i(t,a,e):i(e))||e);return r&&e&&b(t,a,e),e};let c=class extends v(m){constructor(){super(...arguments),this.bindCharts=new d(this,l),this.cate="top"}render(){return n`<div class="ui-pageview ui-container place-content-center relative flex flex-col"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="ui-board-title"><charts-cate route></charts-cate></div></div></div>${h(l.cate,n`<top-charts paging pageSize="15" .brief="${!1}" class="w-full"></top-charts>`)}</div></div>`}};p([u()],c.prototype,"cate",2);c=p([f("view-charts")],c);export{c as ViewCharts};
