import{T as v,c as l}from"./index-3v7c5XRZ.js";import"./charts-cate-Gk4Rrh95.js";import{m as h,x as n,I as d,j as u,l as f}from"./vendor-tqqTBR6w.js";const m="";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,p=(o,t,a,r)=>{for(var e=r>1?void 0:r?w(t,a):t,s=o.length-1,i;s>=0;s--)(i=o[s])&&(e=(r?i(t,a,e):i(e))||e);return r&&e&&b(t,a,e),e};let c=class extends v(m){constructor(){super(...arguments),this.bindCharts=new h(this,l),this.cate="top"}render(){return n`<div class="ui-pageview ui-container place-content-center relative flex flex-col"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5><charts-cate route></charts-cate></h5></div></div>${d(l.cate,n`<top-charts paging pageSize="15" .brief="${!1}" class="w-full"></top-charts>`)}</div></div>`}};p([u()],c.prototype,"cate",2);c=p([f("view-charts")],c);export{c as ViewCharts};
